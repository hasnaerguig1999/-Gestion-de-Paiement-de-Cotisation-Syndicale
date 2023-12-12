import axios from 'axios';

const API_URL = 'http://localhost:8000';
axios.defaults.baseURL = API_URL;


// export const login = async (email, password) => {
//   const response = await axios.post('/auth/login', { email, password });
//   return response.data;
// };

// export const register = async (email, password,name) => {
//   const response = await axios.post('/auth/register', { email, password ,name});
//   return response.data;
// };
