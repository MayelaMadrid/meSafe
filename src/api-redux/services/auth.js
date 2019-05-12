import { apiRequest } from './../apiRequest';

export const login = async (user, pass) => {
  const response = await apiRequest(
    'login',
    'POST',
    {
      "username": "dpayan",
      "pass": "1234"
    },
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};

