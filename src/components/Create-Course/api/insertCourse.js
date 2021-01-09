
import { callApi } from './../../../config/callApi';
const insertCourse = async (data) => {
  try {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    let method = 'POST';
    let queryResult = await callApi('/courses/insert', method, null, formData ? formData : data, 'form');

    return queryResult.data;

  } catch (e) {
    console.log(e);

  }


}

export default insertCourse;