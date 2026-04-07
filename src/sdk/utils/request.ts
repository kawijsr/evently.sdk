import {CONSTANTS} from '../constants';

export const request = {
  baseUrl: CONSTANTS.API_URL,
  headers: {
    'content-type': 'application/json',
    'Authorization': 'ApiKey ' + process.env.EVENTLY_PRIVATE_API_KEY,
  },
  buildResponse: (response) => {
    if (response.status !== 200 && response.status !== 201) {
      console.error({
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        url: response.url,
      });
      throw new Error(response.statusText);
    }
    return response.json();
  },
  post: (url, data) => {
    url = `${request.baseUrl}${url}`;
    const headers = { ...request.headers };
    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    }).then(request.buildResponse).catch(error => {
      throw error;
    });
  },
};