import * as services from '../services/friends';
import * as actionTypes from '../actionTypes/friends';

export const getFriends = () => async dispatch => {
  const result = await services.getFriends();
  dispatch({
    type: actionTypes.FRIENDS_BY_USER,
    payload: result
  });
};


export const addFriend = (id) => async dispatch => {
  const result = await services.addFriend(id);
  dispatch({
    type: actionTypes.ADD_FRIEND,
    payload: result
  });
};