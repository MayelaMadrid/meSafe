import * as services from '../services/reports';
import * as actionTypes from '../actionTypes/reports';

export const getReports = (type) => async dispatch => {
  const result = await services.getReports(type);
  dispatch({
    type: actionTypes.REPORTS,
    payload: result
  });
};
export const addReport = (type) => async dispatch => {
  const result = await services.addReport(type);
  dispatch({
    type: actionTypes.NEW_REPORT,
    payload: result
  });
};