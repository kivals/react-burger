import authService from "../auth.service";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_CLEAR_PROFILE,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_SUCCESS,
  PROFILE_REQUEST,
  PROFILE_REQUEST_FAILED,
  PROFILE_REQUEST_SUCCESS,
  PROFILE_UPDATE_FAILED,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAILED,
  REGISTER_REQUEST_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS, SAVE_RESET_PASSWORD_FAILED,
  SAVE_RESET_PASSWORD_REQUEST, SAVE_RESET_PASSWORD_SUCCESS
} from "../constants/auth";
import {TUser} from "../types/data";

export interface ILoginAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_REQUEST_SUCCESS;
  readonly value: TUser;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_REQUEST_FAILED;
  value: string;
}

export interface IRegisterAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_REQUEST_SUCCESS;
  readonly value: TUser;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_REQUEST_FAILED;
  value: string;
}

export interface IProfileAction {
  readonly type: typeof PROFILE_REQUEST;
}

export interface IProfileSuccessAction {
  readonly type: typeof PROFILE_REQUEST_SUCCESS;
  readonly value: TUser;
}

export interface IProfileFailedAction {
  readonly type: typeof PROFILE_REQUEST_FAILED;
}

export interface IProfileUpdateAction {
  readonly type: typeof PROFILE_UPDATE_REQUEST;
}

export interface IProfileUpdateSuccessAction {
  readonly type: typeof PROFILE_UPDATE_SUCCESS;
  readonly value: TUser;
}

export interface IProfileUpdateFailedAction {
  readonly type: typeof PROFILE_UPDATE_FAILED;
  readonly value: string;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_REQUEST_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_REQUEST_FAILED;
  readonly value: string;
}

export interface IResetPasswordAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
  readonly value: string;
}

export interface ISaveResetPasswordAction {
  readonly type: typeof SAVE_RESET_PASSWORD_REQUEST;
}

export interface ISaveResetPasswordSuccessAction {
  readonly type: typeof SAVE_RESET_PASSWORD_SUCCESS;
}

export interface ISaveResetPasswordFailedAction {
  readonly type: typeof SAVE_RESET_PASSWORD_FAILED;
  readonly value: string;
}

export type TAuthActions =
  | ILoginAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | IRegisterAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | IProfileAction
  | IProfileSuccessAction
  | IProfileFailedAction
  | IProfileUpdateAction
  | IProfileUpdateSuccessAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | ISaveResetPasswordAction
  | ISaveResetPasswordSuccessAction
  | ISaveResetPasswordFailedAction

export const login = ({email, password}) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  try {
    const response = await authService.login(email,password);
    if (response.data && response.data?.success) {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        value: response.data.user,
      });
    }
  } catch (e) {
    dispatch({
      type: LOGIN_REQUEST_FAILED,
      value: e.response?.data?.message,
    });
    console.error(e.response?.data?.message);
  }
}

export const register = ({name, email, password}) => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST
  });
  try {
    const response = await authService.register(name, email,password);
    if (response.data && response.data.success) {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      dispatch({
        type: REGISTER_REQUEST_SUCCESS,
        value: response.data.user,
      });
    }
  } catch (e) {
    dispatch({
      type: REGISTER_REQUEST_FAILED,
      value: e.response?.data?.message,
    });
    console.error(e.response?.data?.message);
  }
}

export const checkUserAuth = () => (dispatch) => {
  if (localStorage.getItem('token')) {
    dispatch(
      getProfile(() => {
        dispatch({ type: AUTH_CHECK });
      })
    );
  } else {
    dispatch({ type: AUTH_CHECK });
    dispatch({
      type:  PROFILE_REQUEST_FAILED,
    });
  }
};

const getProfile = (afterCallback) => async (dispatch) => {
  dispatch({
    type: PROFILE_REQUEST
  });
  try {
    const response = await authService.getProfile();
    if (response.data && response.data?.success) {
      dispatch({
        type: PROFILE_REQUEST_SUCCESS,
        value: response.data.user,
      });
    }
  } catch (e) {
    dispatch({
      type:  PROFILE_REQUEST_FAILED,
    });
  } finally {
    afterCallback();
  }
}

export const updateProfile = (name, email, password) => async (dispatch) => {
  dispatch({
    type: PROFILE_UPDATE_REQUEST
  });
  try {
    const response = await authService.updateProfile(name, email, password);
    if (response.data && response.data?.success) {
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        value: response.data.user,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAR_PROFILE_SUCCESS,
        });
      }, 3000);
    }
  } catch (e) {
    dispatch({
      type:  PROFILE_UPDATE_FAILED,
      value: e.response?.data?.message,
    });
    console.error(e.response?.data?.message);
  }
}

export const logout = () => async (dispatch) => {
  const token = localStorage.getItem('refreshToken');
  if (!token) {
    return;
  }
  dispatch({
    type: LOGOUT_REQUEST
  });
  try {
    const response = await authService.logout(token);
    if (response.data && response.data?.success) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      dispatch({
        type: LOGOUT_REQUEST_SUCCESS,
      });
      dispatch({
        type: LOGOUT_CLEAR_PROFILE,
      });
    }
  } catch (e) {
    dispatch({
      type:  LOGOUT_REQUEST_FAILED,
    });
  }
}

export const resetPassword = (email) => async (dispatch) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST
  });
  try {
    const response = await authService.resetPassword(email);
    if (response.data && response.data?.success) {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      });
    }
  } catch (e) {
    dispatch({
      type:  RESET_PASSWORD_FAILED,
      value: e.response?.data?.message,
    });
    console.error(e.response?.data?.message);
  }
}

export const saveResetPassword = (code, newPassword) => async (dispatch) => {
  dispatch({
    type: SAVE_RESET_PASSWORD_REQUEST
  });
  try {
    const response = await authService.saveResetPassword(code, newPassword);
    if (response.data && response.data?.success) {
      dispatch({
        type: SAVE_RESET_PASSWORD_SUCCESS,
      });
    }
  } catch (e) {
    dispatch({
      type:  SAVE_RESET_PASSWORD_FAILED,
      value: e.response?.data?.message,
    });
    console.error(e.response?.data?.message);
  } finally {
    dispatch({
      type: CLEAR_PROFILE_SUCCESS,
    });
  }
}