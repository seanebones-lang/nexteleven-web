import { createContentSyncService } from '@/lib/mihrab-sync';
import { StudyFailure } from '@/lib/mihrab-study';
export const runtime='nodejs';
export const maxDuration=120;
const sync=createContentSyncService({clientId:process.env.MIHRAB_QF_CLIENT_ID,clientSecret:process.env.MIHRAB_QF_CLIENT_SECRET});
export async function POST(request:Request){
 try{
  const reader=request.body?.getReader();if(!reader)throw new StudyFailure(400,'invalid_sync_request');
  let size=0;const chunks:Uint8Array[]=[];
  try{for(;;){const p=await reader.read();if(p.done)break;size+=p.value.length;if(size>16384){await reader.cancel();throw new StudyFailure(413,'request_too_large');}chunks.push(p.value);}}finally{reader.releaseLock();}
  let input:unknown;try{input=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{throw new StudyFailure(400,'invalid_sync_request');}
  return new Response(await sync(input),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
 }catch(e){const failure=e instanceof StudyFailure?e:new StudyFailure(502,'sync_unavailable');return Response.json({error:failure.message},{status:failure.status,headers:{'Cache-Control':'no-store',...(failure.status===429?{'Retry-After':'60'}:{})}});}
}
