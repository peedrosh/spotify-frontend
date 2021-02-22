import axios from 'axios';

const api = axios.create({
  baseURL: 'https://playlist-recommend-peedrosh.herokuapp.com',
});

export default api;
