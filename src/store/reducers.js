import { combineReducers } from 'redux';
import { monthReducer } from "./month/reducers";

export default combineReducers({
  month: monthReducer,
})