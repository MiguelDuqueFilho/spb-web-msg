import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://54.164.71.246:4005/api',
  baseURL: 'http://192.168.100.68:4005/api',
  // baseURL: 'http://192.168.100.68/api',
});
