import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
 
  // if(token){
  //   config.headers.Authorization =  'Bearer '+ JWT.getTokken();
  // }
  // else{
  //   config.headers.Authorization =  null;
  // }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosInstance;