
import Axios from 'axios'
import config from '../config';

const axios = Axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
})

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth-token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export default axios;