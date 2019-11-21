import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://reqres.in/api'
});

export default api;
