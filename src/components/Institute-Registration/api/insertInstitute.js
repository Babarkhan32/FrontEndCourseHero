
import { callApi } from './../../../config/callApi';
const insertInstitute=async(data)=>{
  try{
console.log("Data",data.imageSet)
  //   var form_data = new FormData();

  //   for ( var key in data ) {
  //       form_data.append(key, data[key]);
  // }

   let method='POST';
  let queryResult=await callApi('/institute/insert',method,null,data,'');
return queryResult.data;

  }catch(e){
      console.log(e);
}
}
export default insertInstitute;