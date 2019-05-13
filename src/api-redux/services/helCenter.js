import { apiRequest } from './../apiRequest';


export const getCenterByType = async (type) => {
  const response = await apiRequest(
    `centro-ayuda/tipo/${type}`,
    'GET',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
