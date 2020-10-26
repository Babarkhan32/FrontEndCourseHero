
import { callApi } from './../../../config/callApi';
const getCourses=async(data)=>{
    try{
       let method='GET';
  let queryResult=await callApi('/all/courses',method,null,data);

return queryResult.data;

  }catch(e){
      console.log(e);

  }


}

export default getCourses;