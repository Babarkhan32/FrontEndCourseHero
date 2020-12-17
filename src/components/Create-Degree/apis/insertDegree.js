
import { callApi } from './../../../config/callApi';
const insertDegree=async(data)=>{
  try{
   let method='POST';
  let queryResult=await callApi('/degree/insert',method,null,data,'');

return queryResult.data;

  }catch(e){
      console.log(e);

  }
}

export default insertDegree;