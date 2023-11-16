// src/utils/httpInterceptor.ts
import axios, { AxiosRequestConfig } from 'axios';

axios.interceptors.request.use(
  (config) => {
    // You can modify the request config here, such as adding headers
    return config;
  },
  (error) => {
    // You can handle request errors here
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // You can handle response errors here
    return Promise.reject(error);
  }
);
