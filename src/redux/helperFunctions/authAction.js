import {LOGIN_USER, LOGOUT_USER, GET_ORG_LIST, GET_USER} from '../actionsTypes';

export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOADING_STOP = 'LOADING_STOP';
//helper function
export const authLoading = () => ({
  type: AUTH_LOADING,
});
export const authFailed = () => ({
  type: AUTH_FAILED,
});
export const loginSuccess = (res) => ({
  type: LOGIN_USER,
  payload: res,
});
export const orgList = (res) => ({
  type: GET_ORG_LIST,
  payload: res,
});
export const logoutUserSuccess = () => ({
  type: LOGOUT_USER,
});
export const tokenUpdate = (res) => ({
  type: LOGOUT_USER,
  payload: res,
});
export const stopLoading = () => ({
  type: LOADING_STOP,
});
export const userProfile = (res) => ({
  type: GET_USER,
  payload: res,
});
