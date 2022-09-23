import axios from 'axios';

export const API_BASE_URL = 'https://fake-api-coba.herokuapp.com/todos';

export const http = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
