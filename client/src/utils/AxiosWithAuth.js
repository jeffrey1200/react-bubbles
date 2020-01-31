import axios from "axios";

export const AxiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
