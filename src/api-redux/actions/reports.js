import * as services from '../services/reports';
import * as actionTypes from '../actionTypes/reports';

export const getReportsType = (type) => async dispatch => {
  const result = await services.getReportsType(type);
  let actionType;
  if (type === 1) {
    actionType = actionTypes.REPORTS_RO;
  }
  if (type === 2) {
    actionType = actionTypes.REPORTS_AS;
  }
  if (type === 3) {
    actionType = actionTypes.REPORTS_RE;
  }
  dispatch({
    type: actionType,
    payload: result
  });
};

export const getReports = () => async dispatch => {
  const result = await services.getReports();
  dispatch({
    type: actionTypes.REPORTS_NOW,
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

export const getReportById = (id) => async dispatch => {
  const result = await services.getReportById(id);
  dispatch({
    type: actionTypes.REPORT_BY_ID,
    payload: result
  });
};

export const getReportByUser = () => async dispatch => {
  const result = await services.getReportByUser();
  dispatch({
    type: actionTypes.REPORT_BY_USER,
    payload: result
  });
};
export const getReportSearch = (word) => async dispatch => {
  const result = await services.getReportByUser(word);
  dispatch({
    type: actionTypes.REPORT_SEARCH,
    payload: result
  });
};