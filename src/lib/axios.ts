import axios from 'axios';



const axiosinstans = axios.create({
  baseURL: 'http://localhost:8080', 
  
});

export default axiosinstans;