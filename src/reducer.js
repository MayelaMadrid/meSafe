
import { combineReducers } from 'redux';
import { ApiReducer } from './api-redux';

const rootReducer = combineReducers({
  Api: ApiReducer,
});

export default rootReducer;
