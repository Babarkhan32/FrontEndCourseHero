
import { callApi } from './../../../config/callApi';
const getSearchedCourses=async(data)=>{
    try{
       let method='POST';
  let queryResult=await callApi('/search',method,null,data);

return queryResult.data;

  }catch(e){
      console.log(e);

  }


}

export default getSearchedCourses;