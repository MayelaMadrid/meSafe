
import { combineReducers } from 'redux';
import auth from './auth';
import reports from './reports';


const ApiReducer = combineReducers({
  Auth: auth,
  Reports: reports
});
export default ApiReducer;
