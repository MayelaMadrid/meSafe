import * as actionTypes from '../actionTypes/reports';

const initialState = {
  reports: undefined,
  newReport: undefined
};

export default function reports(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.REPORTS:
      newState = Object.assign({}, state, {
        reports: action.payload
      });
      return newState;
    case actionTypes.NEW_REPORT:
      newState = Object.assign({}, state, {
        newReport: action.payload
      });
      return newState;
    default:
      return state;
  }
}
