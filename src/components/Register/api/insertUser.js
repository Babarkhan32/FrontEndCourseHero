
import { callApi } from './../../../config/callApi';
const insertUser=async(data)=>{
    

  try{
     let method='POST';
  let queryResult=await callApi('/users/signup',method,null,data);

return queryResult.data;

  }catch(e){
      console.log(e);

  }


}

export default insertUser;