import * as actionTypes from '../actionTypes/helCenter';

const initialState = {
  centerType: undefined
};

export default function reports(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.CENTER_TYPE:
      newState = Object.assign({}, state, {
        centerType: action.payload
      });
      return newState;
    default:
      return state;
  }
}
