import { createHash } from 'node:crypto';
import { StudyFailure } from './mihrab-study.ts';
type Row = Record<string, unknown>;
type Config = {clientId?: string; clientSecret?: string; fetcher?: typeof fetch; now?: () => number};
const base = 'https://apis.quran.foundation/content/api/v4';
const catalogFilter = 'mushafs:5;tafsirs:14,160,164,169;word_by_word_translations:59,99,100,104,555;word_by_word_transliterations:60';
const fields = new Set(['id','record_type','resource_id','resource_content_id','word_id','verse_id','source_verse_id','verse_key','chapter_id','chapter_number','verse_number','position','position_in_verse','position_in_line','position_in_page','page_number','line_number','char_type_id','char_type_name','text','language_id','language_name','priority','updated_at','mushaf_id','name','description','pages_count','lines_per_page','default_font_name','mapping_mode','first_verse_id','last_verse_id','first_word_id','last_word_id','verses_count','group_verse_key_from','group_verse_key_to','group_verses_count','start_verse_id','end_verse_id']);
function object(x: unknown): x is Row { return !!x && typeof x === 'object' && !Array.isArray(x); }
function positive(x: unknown): x is number { return Number.isSafeInteger(x) && Number(x)>0; }
function scalarRow(x: unknown): Row {
 if (!object(x) || !positive(x.id)) throw new StudyFailure(502,'invalid_sync_record');
 const out: Row = {};
 for (const [k,v] of Object.entries(x)) if(fields.has(k) && (v===null || ['string','number','boolean'].includes(typeof v))) out[k]=v;
 return out;
}
function permitted(group: unknown,id: unknown): group is string {
 return typeof group==='string' && positive(id) && (
  (group==='mushafs' && id===5) ||
  (group==='tafsirs' && [14,160,164,169].includes(id)) ||
  (group==='word_by_word_transliterations' && id===60) ||
  (group==='word_by_word_translations' && [59,99,100,104,555].includes(id)));
}
function opaque(x: unknown): x is string { return typeof x==='string' && x.length>0 && x.length<=8192 && /^[\x21-\x7e]+$/.test(x); }
export function syncInput(value: unknown): Row {
 if (!object(value) || Object.keys(value).some(k=>!['op','group','id','checkpoint','cursor','part','digest','min_sequence'].includes(k))) throw new StudyFailure(400,'invalid_sync_request');
 const op=value.op;
 if(op==='catalog' && Object.keys(value).length===1) return value;
 if(!permitted(value.group,value.id)) throw new StudyFailure(400,'invalid_sync_resource');
 if(op==='sync') {
  if(['part','digest','min_sequence'].some(k=>k in value) || (value.checkpoint!==undefined && !opaque(value.checkpoint)) || (value.cursor!==undefined && !opaque(value.cursor)) || (value.cursor!==undefined && value.checkpoint!==undefined)) throw new StudyFailure(400,'invalid_sync_request');
 } else if(op==='snapshot') {
  if('checkpoint' in value || 'cursor' in value || !Number.isSafeInteger(value.min_sequence) || Number(value.min_sequence)<0 || (value.part!==undefined && (!Number.isSafeInteger(value.part) || Number(value.part)<0 || Number(value.part)>255)) || (value.digest!==undefined && (typeof value.digest!=='string' || !/^[a-f0-9]{64}$/.test(value.digest)))) throw new StudyFailure(400,'invalid_sync_request');
 } else throw new StudyFailure(400,'invalid_sync_request');
 return value;
}
async function json(response: Response,limit: number): Promise<Row> {
 const reader=response.body?.getReader();if(!reader)throw new StudyFailure(502,'invalid_sync_response');
 const chunks: Uint8Array[]=[];let size=0;
 try {
  for(;;){const p=await reader.read();if(p.done)break;size+=p.value.length;if(size>limit){await reader.cancel();throw new StudyFailure(502,'sync_resource_too_large');}chunks.push(p.value);}
  const value=JSON.parse(Buffer.concat(chunks).toString('utf8'));if(!object(value))throw new Error();return value;
 } catch(e){if(e instanceof StudyFailure)throw e;throw new StudyFailure(502,'invalid_sync_response');}finally{reader.releaseLock();}
}
export function createContentSyncService(config: Config) {
 const request=config.fetcher??fetch,now=config.now??Date.now;
 let token: {value:string;until:number}|undefined;let tokenWork:Promise<string>|undefined;
 let active=0,minute=-1,calls=0,snapshotActive=false;
 type Parts={digest:string;sequence:number;parts:string[];count:number;until:number;bytes:number;language?:unknown};
 const snapshots=new Map<string,Parts>();const work=new Map<string,Promise<Parts>>();
 let snapshotBytes=0;
 async function auth():Promise<string>{
  if(token && token.until>now())return token.value;if(tokenWork)return tokenWork;
  tokenWork=(async()=>{
   const r=await request('https://oauth2.quran.foundation/oauth2/token',{method:'POST',redirect:'error',cache:'no-store',signal:AbortSignal.timeout(12000),headers:{Authorization:`Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')}`,'Content-Type':'application/x-www-form-urlencoded'},body:'grant_type=client_credentials&scope=content'});
   if(!r.ok){await r.body?.cancel();throw new StudyFailure(502,'provider_auth_unavailable');}
   const data=await json(r,65536);if(typeof data.access_token!=='string'||!data.access_token||data.access_token.length>32768||typeof data.expires_in!=='number'||data.expires_in<1||data.expires_in>86400)throw new StudyFailure(502,'invalid_sync_response');
   token={value:data.access_token,until:now()+Math.max(0,data.expires_in-30)*1000};return token.value;
  })();try{return await tokenWork;}finally{tokenWork=undefined;}
 }
 async function read(path:string,limit=8*1024*1024):Promise<Row>{
  for(let n=0;n<2;n++){
   const r=await request(base+path,{redirect:'error',cache:'no-store',signal:AbortSignal.timeout(90000),headers:{'x-auth-token':await auth(),'x-client-id':config.clientId!}});
   if(r.status===401 && n===0){token=undefined;await r.body?.cancel();continue;}
   if(!r.ok){await r.body?.cancel();throw new StudyFailure(r.status===410?409:r.status===404?404:502,r.status===410?'resync_required':'sync_provider_unavailable');}
   return json(r,limit);
  }throw new StudyFailure(502,'sync_provider_unavailable');
 }
 function page(data:Row,group?:string,id?:number):Row {
  const s=data.sync;if(!object(s)||typeof s.has_more!=='boolean'||!Array.isArray(s.mutations)||!Number.isSafeInteger(s.sync_until_sequence))throw new StudyFailure(502,'invalid_sync_response');
  let cursor: string|null=null;
  if(s.has_more){
   if(typeof s.next_page_url!=='string'||!s.next_page_url.startsWith('/api/v4/resources/sync?'))throw new StudyFailure(502,'invalid_sync_response');
   const u=new URL(s.next_page_url,'https://apis.quran.foundation');if(u.origin!=='https://apis.quran.foundation'||u.pathname!=='/api/v4/resources/sync'||[...u.searchParams.keys()].some(k=>k!=='cursor')||!opaque(u.searchParams.get('cursor')))throw new StudyFailure(502,'invalid_sync_response');
   cursor=u.searchParams.get('cursor');
  } else if(!opaque(s.next_sync_token))throw new StudyFailure(502,'invalid_sync_response');
  const mutations=s.mutations.map(x=>{
   if(!object(x)||!permitted(x.resource_group,x.resource_id)||(group!==undefined&&(x.resource_group!==group||x.resource_id!==id))||!['RESOURCE_CREATE','RESOURCE_INVALIDATE','RESOURCE_DELETE','RESOURCE_UPDATE','ROW_CREATE','ROW_UPDATE','ROW_DELETE'].includes(String(x.type))||!Number.isSafeInteger(x.sequence))throw new StudyFailure(502,'invalid_sync_response');
   if((x.type==='RESOURCE_CREATE'||x.type==='RESOURCE_INVALIDATE') && x.snapshot_url!==`/api/v4/resources/snapshots/${x.resource_group}/${x.resource_id}`)throw new StudyFailure(502,'invalid_sync_response');
   const row:Row={sequence:x.sequence,type:x.type,resource_group:x.resource_group,resource_id:x.resource_id};
   if(String(x.type).startsWith('ROW_')){
    if(typeof x.record_type!=='string'||typeof x.record_key!=='string'||!x.record_key||x.record_key.length>256)throw new StudyFailure(502,'invalid_sync_response');
    row.record_type=x.record_type;row.record_key=x.record_key;
    if(x.type!=='ROW_DELETE')row.data=scalarRow(x.data);
   }
   return row;
  });
  return {sync_until_sequence:s.sync_until_sequence,has_more:s.has_more,next_cursor:cursor,checkpoint:s.has_more?null:s.next_sync_token,mutations};
 }
 async function snapshot(group:string,id:number,min:number):Promise<Parts>{
  const key=`${group}:${id}`,old=snapshots.get(key);if(old&&old.until>now()&&old.sequence>=min)return old;
  if(old){snapshots.delete(key);snapshotBytes-=old.bytes;}const pending=work.get(key);if(pending)return pending;
  if(snapshotActive)throw new StudyFailure(429,'sync_busy');snapshotActive=true;
  const task=(async()=>{
   const data=await read(`/resources/snapshots/${group}/${id}`,96*1024*1024);
   if(data.resource_group!==group||data.resource_id!==id||data.schema_version!==1||!Number.isSafeInteger(data.sync_sequence)||!Array.isArray(data.records)||!data.records.length||data.records.length>200000)throw new StudyFailure(502,'invalid_sync_snapshot');
   const parts:string[]=[];let records:string[]=[],bytes=2,total=0;const hash=createHash('sha256');
   let language:unknown;
   for(const raw of data.records){const row=scalarRow(raw);row.record_type??=({tafsirs:'tafsir',word_by_word_translations:'word_translation',word_by_word_transliterations:'word_transliteration'} as Record<string,string>)[group];language??=row.language_name;const text=JSON.stringify(row),size=Buffer.byteLength(text)+1;if(size>1800000)throw new StudyFailure(502,'sync_record_too_large');
    hash.update(text+'\n');if(bytes+size>1800000){parts.push('['+records.join(',')+']');records=[];bytes=2;}records.push(text);bytes+=size;total+=size;
   }
   if(records.length)parts.push('['+records.join(',')+']');
   const value:Parts={digest:hash.digest('hex'),sequence:Number(data.sync_sequence),parts,count:data.records.length,until:now()+300000,bytes:total,language};
   while(snapshotBytes+total>128*1024*1024 && snapshots.size){const k=snapshots.keys().next().value!;snapshotBytes-=snapshots.get(k)!.bytes;snapshots.delete(k);}
   snapshots.set(key,value);snapshotBytes+=total;return value;
  })();work.set(key,task);try{return await task;}finally{work.delete(key);snapshotActive=false;}
 }
 return async(value:unknown):Promise<string>=>{
  const input=syncInput(value);if(!config.clientId||!config.clientSecret)throw new StudyFailure(503,'study_not_configured');
  const period=Math.floor(now()/60000);if(period!==minute){minute=period;calls=0;}if(active>=4||calls>=120)throw new StudyFailure(429,'sync_busy');active++;calls++;
  try{
   if(input.op==='catalog'){
    const raw=await read('/resources/sync?'+new URLSearchParams({resources:catalogFilter,bootstrap:'true',per_page:'100'}));
    const data=raw.sync;
    if(!object(data)||!Array.isArray(data.mutations)||typeof data.has_more!=='boolean')throw new StudyFailure(502,'invalid_sync_catalog');
    if(data.has_more)throw new StudyFailure(502,'incomplete_sync_catalog');
    const resources=data.mutations.map(x=>{if(!object(x)||!permitted(x.resource_group,x.resource_id))throw new StudyFailure(502,'invalid_sync_catalog_resource');return `${x.resource_group}:${x.resource_id}`;});
    return JSON.stringify({resources});
   }
   const group=String(input.group),id=Number(input.id);
   if(input.op==='sync'){
    const params=new URLSearchParams({per_page:'10'});
    if(input.cursor!==undefined)params.set('cursor',String(input.cursor));else{params.set('resources',`${group}:${id}`);if(input.checkpoint!==undefined)params.set('sync_token',String(input.checkpoint));else params.set('bootstrap','true');}
    const result=JSON.stringify(page(await read('/resources/sync?'+params),group,id));if(Buffer.byteLength(result)>2200000)throw new StudyFailure(502,'sync_page_too_large');return result;
   }
   const data=await snapshot(group,id,Number(input.min_sequence));if(data.sequence<Number(input.min_sequence))throw new StudyFailure(409,'snapshot_changed');if(input.digest!==undefined && input.digest!==data.digest)throw new StudyFailure(409,'snapshot_changed');const part=Number(input.part??0);if(part>=data.parts.length)throw new StudyFailure(400,'invalid_snapshot_part');
   return `{"resource_group":${JSON.stringify(group)},"resource_id":${id},"schema_version":1,"sync_sequence":${data.sequence},"digest":${JSON.stringify(data.digest)},"part":${part},"parts":${data.parts.length},"count":${data.count},"language":${JSON.stringify(data.language??null)},"records":${data.parts[part]}}`;
  }catch(e){if(e instanceof StudyFailure)throw e;throw new StudyFailure(502,'sync_unavailable');}finally{active--;}
 };
}
