
import { callApi } from './../../../config/callApi';
const newDegree = async (data) => {
  try {
    let formData = new FormData()
    for (let key in data) {
      if (key === "imageSet") {
        for (let file in data.imageSet) {
          formData.append('imageSet', data.imageSet[file])
        }
        // formData.append(key, data.imageSet)
      } else {
        formData.append(key, data[key])
      }
    }
    let method = 'POST';
    let queryResult = await callApi('/degree/insert', method, null, formData ? formData : data, formData ? 'form' : '');

    return queryResult.data;

  } catch (e) {
    console.log(e);

  }
}

export default newDegree;