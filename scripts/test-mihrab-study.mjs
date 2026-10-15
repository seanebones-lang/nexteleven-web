import test from 'node:test';
import assert from 'node:assert/strict';
import { createStudyService, studyQuery } from '../src/lib/mihrab-study.ts';
const credentials = {clientId:'fictional-client',clientSecret:'fictional-secret'};
const query = () => new URLSearchParams('kind=words&surah=1&lang=en');
const token = () => Response.json({access_token:'fictional-token',expires_in:3600});
const content = () => Response.json({verses:[{verse_key:'1:1',words:[]}],pagination:{next_page:null},access_token:'must-not-return'});
test('strict allowlist rejects arbitrary URL, duplicate, path, out-of-range and unsupported fields',()=>{
 for(const p of ['kind=words&surah=0','kind=words&surah=115','kind=words&surah=../1','kind=words&surah=1&surah=2','kind=words&surah=1&url=https://example.com','kind=words&surah=1&lang=xx','kind=tafsir&surah=1&edition=999','kind=words&surah=1&edition=169']) assert.throws(()=>studyQuery(new URLSearchParams(p)),e=>e.status===400);
 assert.equal(studyQuery(new URLSearchParams('kind=tafsir&surah=114&edition=169')).field,'tafsirs');
});
test('missing server configuration makes no upstream call',async()=>{
 const service=createStudyService({fetcher:()=>{throw Error('must not call')}});await assert.rejects(service(query()),e=>e.status===503);
});
test('server-only credentials, production hosts and both required headers; strips extra fields',async()=>{
 const calls=[]; const service=createStudyService({...credentials,fetcher:async(url,opts)=>{calls.push({url,opts});return calls.length===1?token():content()}});
 const result=await service(query());assert.deepEqual(JSON.parse(result),{verses:[{verse_key:'1:1',words:[]}]});
 assert.equal(calls[0].url,'https://oauth2.quran.foundation/oauth2/token');assert.equal(calls[0].opts.redirect,'error');
 assert.match(calls[1].url,/^https:\/\/apis.quran.foundation\/content\/api\/v4\/verses\/by_chapter\/1\?/);
 assert.equal(calls[1].opts.headers['x-auth-token'],'fictional-token');assert.equal(calls[1].opts.headers['x-client-id'],'fictional-client');assert.equal(calls[1].opts.redirect,'error');
});
test('identical concurrent calls coalesce; cached content expires after one day',async()=>{
 let time=0,calls=0;const service=createStudyService({...credentials,now:()=>time,fetcher:async(url)=>{calls++;return url.includes('/oauth2/')?token():content()}});
 await Promise.all([service(query()),service(query())]);assert.equal(calls,2);await service(query());assert.equal(calls,2);
 time=86400001;await service(query());assert.equal(calls,4);
});
test('only one refresh/retry on 401; never loops on 403',async()=>{
 let calls=0;const service=createStudyService({...credentials,fetcher:async(url)=>{calls++;if(url.includes('/oauth2/'))return token();return new Response('',{status:401})}});
 await assert.rejects(service(query()),e=>e.status===502);assert.equal(calls,4);
 let forbidden=0;const denied=createStudyService({...credentials,fetcher:async()=>{forbidden++;return new Response('private provider detail',{status:403})}});
 await assert.rejects(denied(query()),e=>e.message==='provider_auth_unavailable');assert.equal(forbidden,1);
});
test('bad JSON, missing/empty data and partial pagination fail rather than becoming cached success',async()=>{
 for(const data of [{wrong:[]},{verses:[]},{verses:[{}],pagination:{next_page:2}}]){
  let calls=0;const service=createStudyService({...credentials,fetcher:async(url)=>{calls++;return url.includes('/oauth2/')?token():Response.json(data)}});
  await assert.rejects(service(query()),e=>e.status===502);await assert.rejects(service(query()),e=>e.status===502);assert.equal(calls,3);
 }
});
test('oversized provider data and network errors return bounded generic failures',async()=>{
 const large=createStudyService({...credentials,fetcher:async(url)=>url.includes('/oauth2/')?token():new Response('x'.repeat(8*1024*1024+1))});await assert.rejects(large(query()),e=>e.message==='provider_response_too_large');
 const broken=createStudyService({...credentials,fetcher:async()=>{throw Error('fictional secret in transport error')}});await assert.rejects(broken(query()),e=>e.message==='study_unavailable');
});

test('invalid JSON and malformed token data never become content success',async()=>{
 const badJson=createStudyService({...credentials,fetcher:async(url)=>url.includes('/oauth2/')?token():new Response('{')});await assert.rejects(badJson(query()),e=>e.message==='invalid_provider_response');
 const badToken=createStudyService({...credentials,fetcher:async()=>Response.json({access_token:'fictional-token',expires_in:-1})});await assert.rejects(badToken(query()),e=>e.message==='invalid_provider_response');
});
test('uncached concurrency is bounded and excess calls do not reach the provider',async()=>{
 let release;const gate=new Promise(r=>{release=r});let upstream=0;
 const service=createStudyService({...credentials,fetcher:async(url)=>{if(url.includes('/oauth2/'))return token();upstream++;await gate;return content()}});
 const pending=[1,2,3,4].map(n=>service(new URLSearchParams(`kind=words&surah=${n}&lang=en`)));
 await assert.rejects(service(new URLSearchParams('kind=words&surah=5&lang=en')),e=>e.status===429);release();await Promise.all(pending);assert.equal(upstream,4);
});
test('process budget bounds uncached traffic even across distinct valid queries',async()=>{
 let upstream=0;const service=createStudyService({...credentials,now:()=>0,fetcher:async(url)=>{if(url.includes('/oauth2/'))return token();upstream++;return content()}});
 for(let n=1;n<=60;n++)await service(new URLSearchParams(`kind=words&surah=${n}&lang=en`));
 await assert.rejects(service(new URLSearchParams('kind=words&surah=61&lang=en')),e=>e.status===429);assert.equal(upstream,60);
});

test('offline availability uses fixed resources and strips all opaque checkpoint/content fields',async()=>{
 let upstream;
 const service=createStudyService({...credentials,fetcher:async(url)=>{
  if(url.includes('/oauth2/'))return token();upstream=url;
  return Response.json({has_more:false,next_sync_token:'private-checkpoint',changes:[{type:'RESOURCE_CREATE',resource_group:'mushafs',resource_id:1,snapshot_url:'/private',content:'must-not-return'}]});
 }});
 assert.deepEqual(JSON.parse(await service(new URLSearchParams('kind=offline-policy'))),{offline_sync_resources:['mushafs:1']});
 assert.match(upstream,/resources\/sync\?bootstrap=true/);
 assert.throws(()=>studyQuery(new URLSearchParams('kind=offline-policy&surah=1')),e=>e.status===400);
});
test('offline availability fails closed on partial or foreign results',async()=>{
 for(const data of [{has_more:true,changes:[]},{has_more:false,changes:[{type:'RESOURCE_CREATE',resource_group:'translations',resource_id:19}]}]){
  const service=createStudyService({...credentials,fetcher:async(url)=>url.includes('/oauth2/')?token():Response.json(data)});
  await assert.rejects(service(new URLSearchParams('kind=offline-policy')),e=>e.status===502);
 }
});
