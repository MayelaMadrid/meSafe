import axios from 'axios';
;


export const apiRequest = async (path, method, data, params, headers) => {
  try {
    const url = `http://142.93.245.139:3001/${path}`;
    const requestData = {
      url,
      data,
      method,
      params,

    };
    return await axios.request(requestData);
  } catch (err) {
    return err;
  }
};


