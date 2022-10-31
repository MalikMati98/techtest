import {combineReducers} from 'redux';

//Import All Reducers
import {authReducer} from './authReducer';
export default combineReducers({
  auth: authReducer
});
