import axios from 'axios';
import { Domain } from '../baseUrl';
export const DataAccess = () => {
  const Post = async (URL, params) => {
    console.log('from dal', typeof Domain + URL, '\n', params);
    try {
      let response = await axios.post(Domain + URL, JSON.stringify(params), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return await ReturnResponse(response);
    } catch (err) {
      console.error('error', err.message);
    }
  };
  
  
  return {
    Post
  };
};


const ReturnResponse = async (response) => {
  if (response.status === 200) {
    return response.data;
  } else {
    response = {
      error: 'error',
      status: response.status,
      error_description:
        'Unable to process your request Please contact your admin',
    };
    return response;
  }
};
