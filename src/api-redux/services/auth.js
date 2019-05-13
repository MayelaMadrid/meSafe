import { apiRequest } from './../apiRequest';


export const login = async (user, pass) => {
  const response = await apiRequest(
    'login',
    'POST',
    {
      "username": user,
      "pass": pass
    },
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};

