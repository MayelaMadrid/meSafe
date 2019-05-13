import * as actionTypes from '../actionTypes/reports';

const initialState = {
  reportsNow: undefined,
  reportsAs: undefined,
  reportsRo: undefined,
  reportsRe: undefined,
  newReport: undefined,
  reportById: undefined,
  reportByUser: undefined,
  reportSearch:undefined
};

export default function reports(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.REPORTS_NOW:
      newState = Object.assign({}, state, {
        reportsNow: action.payload
      });
      return newState;
    case actionTypes.REPORTS_AS:
      newState = Object.assign({}, state, {
        reportsAs: action.payload
      });
      return newState;
    case actionTypes.REPORTS_RO:
      newState = Object.assign({}, state, {
        reportsRo: action.payload
      });
      return newState;
    case actionTypes.REPORTS_RE:
      newState = Object.assign({}, state, {
        reportsRe: action.payload
      });
      return newState;
    case actionTypes.NEW_REPORT:
      newState = Object.assign({}, state, {
        newReport: action.payload
      });
      return newState;
    case actionTypes.REPORT_BY_ID:
      newState = Object.assign({}, state, {
        reportById: action.payload
      });
      return newState;
    case actionTypes.REPORT_BY_USER:
      newState = Object.assign({}, state, {
        reportByUser: action.payload
      });
      return newState;
      case actionTypes.REPORT_SEARCH:
      newState = Object.assign({}, state, {
        reportSearch: action.payload
      });
      return newState;
    default:
      return state;
  }
}
