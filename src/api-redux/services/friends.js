import { apiRequest } from './../apiRequest';


export const getFriends = async () => {
  const response = await apiRequest(
    'amigos/',
    'GET',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};


export const addFriend = async (id) => {
  const response = await apiRequest(
    `amigos/${id}`,
    'POST',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
