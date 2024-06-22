import axios from "axios";

const URL = "https://667256d76ca902ae11afe79a.mockapi.io/api/v1/store";

const getData = async () => {
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};



const addItem = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getData , addItem};