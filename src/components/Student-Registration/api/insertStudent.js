
import { callApi } from './../../../config/callApi';
const insertStudent = async (data) => {
  try {
    console.log("Data", data)
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    //   var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    // }

    let method = 'POST';
    let queryResult = await callApi('/student/insert', method, null, formData ? formData : data, 'form');
    return queryResult.data;

  } catch (e) {
    console.log(e);
  }
}
export default insertStudent;