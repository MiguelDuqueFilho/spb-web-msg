import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://3.93.167.133/api',
  // baseURL: 'http://192.168.100.68/api',
});
