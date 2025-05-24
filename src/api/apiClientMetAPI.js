import axios from "axios";

const apiClientMetAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL_MET,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClientMetAPI;
