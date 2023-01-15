import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
} from "./types";

import AuthService from "../services/auth.service";

export const login = (form) => (dispatch) => {
  return AuthService.login(form).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      return Promise.resolve();
      
    },
    (error) => {
      const {message} = error
      dispatch({
        type: LOGIN_FAIL,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET,
  })
}


export const forgotPassword = (form) => (dispatch) => {
  return AuthService.forgotPassword(form).then(
    () => {
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
      });
      return Promise.resolve();
      
    },
    (error) => {
      const {message} = error
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const ResetPassword = (form) => (dispatch) => {
  return AuthService.ResetPassword(form).then(
    () => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
      return Promise.resolve();
      
    },
    (error) => {
      const {message} = error
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: message,
      });
      return Promise.reject();
    }
  );
}