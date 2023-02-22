import axios from "axios";
import queryString from "query-string";

// const baseUrl = "https://moonflix-api.vercel.app/api/v1/"

const baseURL = process.env.REACT_APP_BASE_URL;

const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params: any) => queryString.stringify(params),
  },
});

publicClient.interceptors.request.use(async (config: any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error.response.data;
  }
);

export default publicClient;
