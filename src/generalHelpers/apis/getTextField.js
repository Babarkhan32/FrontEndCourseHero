import { callApi } from "../../config/callApi";
const getTextField = async (data) => {
  try {
    let method = "GET";
    let queryResult = await callApi("/textFieldData", method, null, data);

    return queryResult.data;
  } catch (e) {
    console.log(e);
  }
};

export default getTextField;
