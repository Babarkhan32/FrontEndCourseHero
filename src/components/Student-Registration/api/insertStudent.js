
import { callApi } from './../../../config/callApi';
const insertStudent=async(data)=>{
  try{
console.log("Data",data)
  //   var form_data = new FormData();

  //   for ( var key in data ) {
  //       form_data.append(key, data[key]);
  // }

   let method='POST';
  let queryResult=await callApi('/student/insert',method,null,data,'');
return queryResult.data;

  }catch(e){
      console.log(e);
}
}
export default insertStudent;