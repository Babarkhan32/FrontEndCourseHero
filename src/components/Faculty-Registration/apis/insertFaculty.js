
import { callApi } from './../../../config/callApi';
const insertFaculty=async(data)=>{
  try{
   let method='POST';
  let queryResult=await callApi('/teacher/insert',method,null,data,'');

return queryResult.data;

  }catch(e){
      console.log(e);

  }
}

export default insertFaculty;