/* eslint-disable camelcase,default-param-last */
import API from "./API";

const prefix = `/stories`;

export const getAllStories = (skip=0, limit=0) => API
	.get(`${prefix}/?skip=${skip}&limit=${limit}`)
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

export const createStory = (
  image,
  status,
  content
) => API
	.post(`${prefix}/`, {
    image,
    status,
    content
  })
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

export const editStory = (
  story_id,
  user_id,
  liked
) => API
  .put(`${prefix}/${story_id}/${user_id}?liked=${liked}`)
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

