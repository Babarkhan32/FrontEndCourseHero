
import { callApi } from './../../../config/callApi';
const insertCourse=async(data)=>{
    

  try{
   
   
     let method='POST';
  let queryResult=await callApi('/courses/insert',method,null,data);

return queryResult.data;

  }catch(e){
      console.log(e);

  }


}

export default insertCourse;