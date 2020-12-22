
import { callApi } from './../../../config/callApi';
const insertFaculty=async(data)=>{
  try{
    var form_data = new FormData();

// for ( var key in data ) {
//     form_data.append(key, data[key]);
// }
   let method='POST';
  let queryResult=await callApi('/teacher/insert',method,null,data,'');

return queryResult.data;

  }catch(e){
      console.log(e);

  }
}

export default insertFaculty;