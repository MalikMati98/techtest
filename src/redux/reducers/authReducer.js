import {
  GET_ORG_LIST,
  LOGIN_USER,
  LOGOUT_USER,
  TOKEN,
  GET_USER,
} from '../actionsTypes';
import {
  AUTH_FAILED,
  AUTH_LOADING,
  LOADING_STOP,
} from '../helperFunctions/authAction';
const INITIAL_STATE = {
  accessToken: undefined,
  loading: false,
  isLoggedIn: undefined,
  user: undefined,
  userOrg: undefined,
  error: undefined,
  refreshToken: undefined,
  userProfile: undefined,
};
export const authReducer = (
  state= INITIAL_STATE,
  action,
) => {
  const {type, payload} = action;
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: payload,
      };
   
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...INITIAL_STATE,
        isLoggedIn: false,
      };
    case LOADING_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state || INITIAL_STATE;
  }
};
