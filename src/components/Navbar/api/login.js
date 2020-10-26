
import { callApi } from './../../../config/callApi';
const login=async(data)=>{
    

  try{
      console.log("here");
     let method='POST';
  let queryResult=await callApi('/users/login',method,null,data);

return queryResult.data;

  }catch(e){
      console.log(e);

  }


}

export default login;