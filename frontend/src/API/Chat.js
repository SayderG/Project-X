/* eslint-disable camelcase,default-param-last */
import API from "./API";

const prefix = `/chats`;

export const getAllMessages = (skip=0, limit=0) => API
	.get(`${prefix}/`)
	.then(response =>
	{
		console.log(response.data);
		return response.data;
	})
	.catch(error =>
	{
		console.log(error);
		return error;
  })

export const createMessage = (
  text,
) => API
	.post(`${prefix}/`, {
    text,
  })
	.then(response =>{
		console.log(response.data);
		return response.data;
	})
	.catch(error =>
	{
		console.log(error);
		return error;
  })