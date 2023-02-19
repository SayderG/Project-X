import axios from 'axios';

const API = axios.create({
	baseURL: "https://d0bf-46-18-203-145.eu.ngrok.io",
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	}
});

export default API;