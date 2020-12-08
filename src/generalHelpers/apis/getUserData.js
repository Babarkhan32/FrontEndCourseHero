
import { callApi } from '../../config/callApi';
const getUserData=async(data)=>{
    try{
     
     let method='POST';
  let queryResult=await callApi('/users/loginUser',method,null,data);

return queryResult.data;

  }catch(e){
      console.log(e);
  }


}

export default getUserData;