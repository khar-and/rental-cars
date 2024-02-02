import axios from "axios";

axios.defaults.baseURL = "https://65301d656c756603295e4a02.mockapi.io/";

export const fetchAllAdverts = async () => {
  const response = await axios.get("adverts");
  return response.data;
};
