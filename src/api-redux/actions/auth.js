import * as services from '../services/auth';
import * as actionTypes from '../actionTypes/auth';

export const login = (user, pass) => async dispatch => {
  const result = await services.login(user, pass);
  dispatch({
    type: actionTypes.LOGIN,
    payload: result
  });
};
export const token = value => ({
  type: actionTypes.TOKEN,
  payload: value,
});
