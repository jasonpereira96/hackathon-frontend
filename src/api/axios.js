import axios from "axios";

// console.log(`axios base url: ${process.env.API_URL}`);

const instance = axios.create({
  baseURL: "http://3.93.20.205",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      ...config.headers,
      token: localStorage.getItem("token"),
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
