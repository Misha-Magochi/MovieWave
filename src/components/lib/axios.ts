import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: process.env.API_URL, 
});

export default axiosinstance;