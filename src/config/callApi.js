
import axios from 'axios'
import config from './constants'


export const callApi = (address, method, headers, data, type) => {
    console.log("here is type", data);

    // data = { 'name': 'sulaiman' }
    let content_type = '';
    if (type === 'form') {
        content_type = 'multipart/form-data';
    } else {
        content_type = 'application/json'
    }

    let token = localStorage.getItem('accessToken');
    if (method === 'GET') {
        return axios.get(config.baseUrl + address, data, {
            headers: {
                'authorization': 'Beraer ' + token,
                'Content-Type': 'application/json'
            }
        });
    } else if (method === 'POST') {
        // console.log('passedData', ...data);
        return axios.post(config.baseUrl + address + "/", data, {
            headers: {
                'authorization': token,
                'Content-Type': content_type,
               "Control-Allow-Origin": "*"

 
            }
        });
    } else if (method === 'PUT') {
        return axios.put(config.baseUrl + address + "/", data, {
            headers: {
                'authorization': 'Beraer ' + token,

            }
        });
    } else {
        return axios.delete(config.baseUrl + address, headers, data);
    }
}