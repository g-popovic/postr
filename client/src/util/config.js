import axios from 'axios';
axios.defaults.withCredentials = true;

export const BACKEND_URI = 'http://localhost:3001';

export const axiosApp = axios.create({
	baseURL: BACKEND_URI,
	withCredentials: true,
});
