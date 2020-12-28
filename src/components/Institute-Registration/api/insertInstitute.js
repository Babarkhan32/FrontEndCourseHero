
import { callApi } from './../../../config/callApi';
const insertInstitute = async (data) => {
  try {
    let formData = new FormData()
    for (let key in data) {
      if (key === "imageSet") {
        console.log('fileData', data.imageSet.length)
        for (let file in data.imageSet) {
          formData.append('imageSet', data.imageSet[file])
        }
        // formData.append(key, data.imageSet)
      } else {
        formData.append(key, data[key])
      }
    }
    //   var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    // }

    let method = 'POST';
    let queryResult = await callApi('/institute/insert', method, null, formData ? formData : data, 'form');
    return queryResult.data;

  } catch (e) {
    console.log(e);
  }
}
export default insertInstitute;