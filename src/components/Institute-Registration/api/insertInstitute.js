
import { callApi } from './../../../config/callApi';
const insertInstitute=async(data)=>{
  try{
   let method='POST';
  let queryResult=await callApi('/institute/insert',method,null,data);
return queryResult.data;

  }catch(e){
      console.log(e);
}
}
export default insertInstitute;