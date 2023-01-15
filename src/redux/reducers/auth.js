import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET,
 FORGOT_PASSWORD_SUCCESS,
 FORGOT_PASSWORD_FAIL,
 RESET_PASSWORD_SUCCESS,
 RESET_PASSWORD_FAIL,
} from "../actions/types";

const userData = localStorage.getItem("userData");

const initialState = {
  userData: userData ? userData: null,
  isLoggedIn: userData? true: false, 
  isError: false,
  message: '',
  isSuccess: false,
}
// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        isError: false,
        message: '',
        userData: payload,
      };
    case LOGIN_FAIL:
      return {
        isError: true,
        isLoggedIn: false,
        userData: null,
        message: payload
      };
    case LOGOUT:
      return {
        isError: false,
        message: '',
        isLoggedIn: false,
        userData: null,
      };
      case RESET:
      return {
        ...state,
        isError: false,
        message: '',
        isLoggedIn: false,
      };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          userData: null,
          isError: false,
          message: '',
          isLoggedIn: false,
          isSuccess: true,
        };
        case FORGOT_PASSWORD_FAIL:
        return {
          userData: null,
          isError: true,
          message: payload,
          isLoggedIn: false,
        };
        case RESET_PASSWORD_SUCCESS:
        return {
          userData: null,
          isError: false,
          message: '',
          isLoggedIn: false,
          isSuccess: true,
        };
        case RESET_PASSWORD_FAIL:
        return {
          userData: null,
          isError: true,
          message: payload,
          isLoggedIn: false,
        };
    default:
      return state;
  }
}