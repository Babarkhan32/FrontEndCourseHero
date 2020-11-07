
import axios from 'axios'
import config from './constants'


export const callApi=(address,method,headers,data)=>{

    let token=localStorage.getItem('accessToken');
    if(method==='GET'){
        return axios.get(config.baseUrl+address,data, {
            headers: {
                'authorization':'Beraer '+token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }else if(method==='POST'){
      console.log(data,"data");
        return axios.post(config.baseUrl+address+"/",data,{headers: {
            'authorization':token,
        }
        });
    }else if(method==='PUT'){
        return axios.put(config.baseUrl+address+"/",data, {headers: {
            'authorization':'Beraer '+token,
        
        }
    });
    }else{
        return axios.delete(config.baseUrl+address,headers,data);
    }
}