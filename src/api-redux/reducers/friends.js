import * as actionTypes from '../actionTypes/helCenter';

const initialState = {
  addFriend: undefined,
  friends: undefined
};

export default function reports(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.FRIENDS_BY_USER:
      newState = Object.assign({}, state, {
        friends: action.payload
      });
      return newState;
    case actionTypes.ADD_FRIEND:
      newState = Object.assign({}, state, {
        addFriend: action.payload
      });
      return newState;
    default:
      return state;
  }
}
