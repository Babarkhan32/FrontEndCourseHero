
import { callApi } from './../../../config/callApi';
const getNavSearch=async(data)=>{
    try{
        let searchData={
        searchString:data
        }
        console.log("Data",data)
       let method='POST';
  let queryResult=await callApi('/nav/search',method,null,searchData);

return queryResult.data;

  }catch(e){
      console.log(e);

  }


}

export default getNavSearch;