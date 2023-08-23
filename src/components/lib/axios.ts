import axios from 'axios';



const axiosinstance = axios.create({
  /* baseURL: process.env.API_URL,  */
  baseURL: 'http://localhost:8080', 
  
});

export default axiosinstance;