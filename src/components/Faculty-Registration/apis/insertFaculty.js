
import { callApi } from './../../../config/callApi';
const insertFaculty = async (data) => {
  try {
    console.log("Data", data)
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }

    let method = 'POST';
    let queryResult = await callApi('/teacher/insert', method, null, formData ? formData : data, formData ? 'form' : '');

    return queryResult.data;

  } catch (e) {
    console.log(e);

  }
}

export default insertFaculty;