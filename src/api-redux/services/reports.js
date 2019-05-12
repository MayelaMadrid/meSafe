import { apiRequest } from './../apiRequest';

export const getReports = async (type) => {
  const response = await apiRequest(
    `reportes/${type}`,
    'GET',
    {},
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};
export const addReport = async (type) => {
  const response = await apiRequest(
    'login',
    'POST',
    {},
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};
