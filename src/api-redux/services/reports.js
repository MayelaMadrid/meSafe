import { apiRequest } from './../apiRequest';

export const getReportsType = async (type) => {
  const response = await apiRequest(
    `reportes/tipo/${type}`,
    'GET',
    {},
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};

export const getReports = async () => {
  const response = await apiRequest(
    `reportes/`,
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

export const getReportById = async (id) => {
  const response = await apiRequest(
    `reportes/${id}`,
    'GET',
    {},
    {},
    {}
  );
  return response.response ? response.response.data : response.data;
};
export const getReportByUser = async () => {
  const response = await apiRequest(
    `reportes/usuario`,
    'GET',
    {},
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};

export const getReportSearch = async (word) => {
  const response = await apiRequest(
    `reportes/busqueda/${word}`,
    'GET',
    {},
    {},
    {}
  );

  return response.response ? response.response.data : response.data;
};