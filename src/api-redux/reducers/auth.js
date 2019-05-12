import * as actionTypes from '../actionTypes/auth';

const initialState = {
  login: undefined,
  token: undefined
};

export default function auth(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.LOGIN:
      newState = Object.assign({}, state, {
        login: action.payload
      });
      return newState;
    case actionTypes.TOKEN:
      newState = Object.assign({}, state, {
        token: action.payload
      });
      return newState;

    default:
      return state;
  }
}
