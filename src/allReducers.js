import { combineReducers } from 'redux';
import request from './requestReducer';
import requestAsync from './requestReducerAsync';
const allReducers = combineReducers({
  request,
  requestAsync
});
export default allReducers;
