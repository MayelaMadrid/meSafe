import axios from 'axios';
import { AsyncStorage } from 'react-native';
let authToken;
get = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      authToken = value;
    }
  } catch (error) {
  }
};
export const apiRequest = async (path, method, data, params, headers) => {
  await get();
  try {
    const url = `http://142.93.245.139:3001/${path}`;
    const requestData = {
      url,
      data,
      method,
      params,
      headers: Object.assign(headers || {}, {
        authorization: authToken
      })
    };
    return await axios.request(requestData);
  } catch (err) {
    return err;
  }
};


