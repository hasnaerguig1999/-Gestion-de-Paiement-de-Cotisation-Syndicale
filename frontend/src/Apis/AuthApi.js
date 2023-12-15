import axios from 'axios';

const API_URL = 'http://localhost:8000';
axios.defaults.baseURL = API_URL;
axios.interceptors.request.use((req) => {
    if (!localStorage.getItem('userData')) return req
    const user  =JSON.parse(localStorage.getItem('userData'))
    const token = user.token
        req.headers.Authorization =`Bearer ${token}`;
  
  
      return req;
    });
