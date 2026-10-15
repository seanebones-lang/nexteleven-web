import test from 'node:test';
import assert from 'node:assert/strict';
import {createContentSyncService,syncInput} from '../src/lib/mihrab-sync.ts';
const credentials={clientId:'fictional-client',clientSecret:'fictional-secret'};
const oauth=()=>Response.json({access_token:'fictional-oauth-secret',expires_in:3600});
const create=(group='mushafs',id=5)=>({sequence:10,type:'RESOURCE_CREATE',resource_group:group,resource_id:id,snapshot_url:`/api/v4/resources/snapshots/${group}/${id}`});
const page=(mutations=[create()],extra={})=>Response.json({sync:{sync_until_sequence:10,has_more:false,next_page_url:null,next_sync_token:'opaque-checkpoint',mutations,...extra},access_token:'do-not-forward'});
const snap=(records=[{record_type:'mushaf',id:5,pages_count:604}],seq=10)=>Response.json({resource_group:'mushafs',resource_id:5,schema_version:1,sync_sequence:seq,records,access_token:'do-not-forward'});
const request=(extra={})=>({op:'snapshot',group:'mushafs',id:5,min_sequence:10,...extra});
test('strict resource/operation/body allowlist rejects arbitrary targets and malformed checkpoints',()=>{
 for(const x of [{op:'sync',group:'users',id:1},{op:'sync',group:'mushafs',id:1},{op:'catalog',url:'https://foreign.test'},{op:'sync',group:'tafsirs',id:169,checkpoint:'a\nb'},{op:'sync',group:'tafsirs',id:169,checkpoint:'a',cursor:'b'},{...request(),part:-1},{...request(),part:0.5},{...request(),min_sequence:-1},{...request(),digest:'../path'},{op:'snapshot',group:'mushafs',id:5}])assert.throws(()=>syncInput(x),e=>e.status===400);
});
test('missing credentials fails without upstream access',async()=>{const run=createContentSyncService({fetcher:()=>{throw Error('must-not-call')}});await assert.rejects(run({op:'catalog'}),e=>e.status===503)});
test('official bootstrap envelope returns content checkpoint but never account credentials/URLs',async()=>{
 const calls=[];const run=createContentSyncService({...credentials,fetcher:async(u,o)=>{calls.push([u,o]);return u.includes('oauth2')?oauth():page()}});
 const result=JSON.parse(await run({op:'sync',group:'mushafs',id:5}));assert.equal(result.checkpoint,'opaque-checkpoint');assert.equal(result.mutations.length,1);assert.equal(result.mutations[0].snapshot_url,undefined);assert.equal(result.access_token,undefined);
 assert.match(calls[1][0],/^https:\/\/apis.quran.foundation\/content\/api\/v4\/resources\/sync\?/);assert.equal(calls[1][1].redirect,'error');assert.equal(calls[1][1].headers['x-auth-token'],'fictional-oauth-secret');
});
test('incremental tokens and cursors are safely encoded, never treated as URLs',async()=>{
 const urls=[];const run=createContentSyncService({...credentials,fetcher:async(u)=>{urls.push(u);return u.includes('oauth2')?oauth():page([])}});
 await run({op:'sync',group:'mushafs',id:5,checkpoint:'abc&url=https://foreign.test'});assert.equal(new URL(urls[1]).searchParams.get('sync_token'),'abc&url=https://foreign.test');
});
test('provider pagination is preserved and checkpoint omitted until final page; foreign redirects rejected',async()=>{
 const run=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():page([],{has_more:true,next_sync_token:null,next_page_url:'/api/v4/resources/sync?cursor=next%2Bpage'})});
 const data=JSON.parse(await run({op:'sync',group:'mushafs',id:5}));assert.equal(data.next_cursor,'next+page');assert.equal(data.checkpoint,null);
 const evil=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():page([],{has_more:true,next_page_url:'https://foreign.test/steal'})});await assert.rejects(evil({op:'sync',group:'mushafs',id:5}),e=>e.status===502);
});
test('foreign resources and unrecognized mutation actions fail closed',async()=>{
 for(const mutation of [create('tafsirs',169),{...create(),type:'DO_SOMETHING_ELSE'}]){
 const run=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():page([mutation])});await assert.rejects(run({op:'sync',group:'mushafs',id:5}),e=>e.status===502);}
});
test('row mutations preserve stable keys and only public model fields',async()=>{
 const row={sequence:11,type:'ROW_UPDATE',resource_group:'tafsirs',resource_id:169,record_type:'tafsir',record_key:'2',data:{id:2,text:'Fictional commentary',start_verse_id:1,end_verse_id:2,access_token:'do-not-forward'}};
 const run=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():page([row])});const value=JSON.parse(await run({op:'sync',group:'tafsirs',id:169}));assert.equal(value.mutations[0].record_key,'2');assert.equal(value.mutations[0].data.access_token,undefined);assert.equal(value.mutations[0].data.text,'Fictional commentary');
});
test('snapshot output is chunked below function response limit, content version is stable, wrong digest refuses mixing',async()=>{
 const rows=Array.from({length:9000},(_,i)=>({id:i+1,record_type:'mushaf_word',text:'fictional-'.repeat(30),word_id:i+1}));let calls=0;
 const run=createContentSyncService({...credentials,fetcher:async(u)=>{calls++;return u.includes('oauth2')?oauth():snap(rows)}});
 const first=JSON.parse(await run(request()));assert.ok(first.parts>1);assert.ok(Buffer.byteLength(JSON.stringify(first))<2000000);const second=JSON.parse(await run(request({part:1,digest:first.digest})));assert.equal(second.digest,first.digest);assert.equal(calls,2);
 await assert.rejects(run(request({part:1,digest:'a'.repeat(64)})),e=>e.status===409);await assert.rejects(run(request({part:255})),e=>e.status===400);
});
test('cached snapshot older than bootstrap boundary is refreshed, never applied with a newer checkpoint',async()=>{
 let snapshots=0;const run=createContentSyncService({...credentials,fetcher:async(u)=>{if(u.includes('oauth2'))return oauth();snapshots++;return snap(undefined,snapshots===1?10:20)}});
 await run(request());const value=JSON.parse(await run(request({min_sequence:20})));assert.equal(value.sync_sequence,20);assert.equal(snapshots,2);
});
test('unchanged stale upstream snapshot refuses boundary advancement',async()=>{
 const run=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():snap(undefined,9)});await assert.rejects(run(request()),e=>e.status===409);
});
test('non-public resource and token reset errors are explicit; no retry on forbidden',async()=>{
 for(const [status,expected] of [[404,404],[410,409],[403,502]]){let calls=0;const run=createContentSyncService({...credentials,fetcher:async(u)=>{calls++;return u.includes('oauth2')?oauth():new Response('',{status})}});await assert.rejects(run(request()),e=>e.status===expected);assert.equal(calls,2);}
});
test('only one OAuth refresh on 401 and generic errors never reveal secrets',async()=>{
 let n=0;const run=createContentSyncService({...credentials,fetcher:async(u)=>{n++;return u.includes('oauth2')?oauth():new Response('',{status:401})}});await assert.rejects(run(request()),e=>e.status===502);assert.equal(n,4);
 const broken=createContentSyncService({...credentials,fetcher:async()=>{throw Error('fictional-secret')}});await assert.rejects(broken(request()),e=>e.message==='sync_unavailable');
});
test('unpublished catalog is distinct from failed/partial availability',async()=>{
 const run=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():page([])});assert.deepEqual(JSON.parse(await run({op:'catalog'})),{resources:[]});
 const partial=createContentSyncService({...credentials,fetcher:async(u)=>u.includes('oauth2')?oauth():page([],{has_more:true,next_page_url:'/api/v4/resources/sync?cursor=x'})});await assert.rejects(partial({op:'catalog'}),e=>e.status===502);
});
