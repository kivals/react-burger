import authService from "../auth.service";
import {
  AUTH_CHECK, CLEAR_ERROR_MESSAGE,
  CLEAR_PROFILE_SUCCESS, CLEAR_RESTORE_FLAGS,
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
  RESET_PASSWORD_SUCCESS,
  SAVE_RESET_PASSWORD_FAILED,
  SAVE_RESET_PASSWORD_REQUEST,
  SAVE_RESET_PASSWORD_SUCCESS
} from "../constants/auth";
import {TUser} from "../../utils/types";
import {AppDispatch} from "../types";

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

export interface IAuthCheck {
  readonly type: typeof AUTH_CHECK
}

export interface IClearProfileSuccess {
  readonly type: typeof CLEAR_PROFILE_SUCCESS
}

export interface ILogoutClearProfile {
  readonly type: typeof LOGOUT_CLEAR_PROFILE
}

export interface IClearRestoreFlags {
  readonly type: typeof CLEAR_RESTORE_FLAGS
}

export interface IClearErrorMessage {
  readonly type: typeof CLEAR_ERROR_MESSAGE
}

export const logoutClearProfile = (): ILogoutClearProfile => ({
  type: LOGOUT_CLEAR_PROFILE
})

export const clearProfileSuccess = (): IClearProfileSuccess => ({
  type: CLEAR_PROFILE_SUCCESS
})

export const authCheckRequest = (): IAuthCheck => ({
  type: AUTH_CHECK
})

export const loginRequestAction = (): ILoginAction => ({
  type: LOGIN_REQUEST
});

export const loginRequestSuccessAction = (user: TUser): ILoginSuccessAction => ({
  type: LOGIN_REQUEST_SUCCESS,
  value: user,
});

export const loginRequestFailedAction = (message: string): ILoginFailedAction => ({
  type: LOGIN_REQUEST_FAILED,
  value: message,
});

export const registerRequestAction = (): IRegisterAction => ({
  type: REGISTER_REQUEST
});

export const registerRequestSuccessAction = (user: TUser): IRegisterSuccessAction => ({
  type: REGISTER_REQUEST_SUCCESS,
  value: user,
});

export const registerRequestFailedAction = (message: string): IRegisterFailedAction => ({
  type: REGISTER_REQUEST_FAILED,
  value: message,
});

export const profileRequestAction = (): IProfileAction => ({
  type: PROFILE_REQUEST
});

export const profileRequestSuccessAction = (user: TUser): IProfileSuccessAction => ({
  type: PROFILE_REQUEST_SUCCESS,
  value: user,
});

export const profileRequestFailedAction = (): IProfileFailedAction => ({
  type: PROFILE_REQUEST_FAILED,
});

export const profileUpdateRequestAction = (): IProfileUpdateAction => ({
  type: PROFILE_UPDATE_REQUEST
});

export const profileUpdateRequestSuccessAction = (user: TUser): IProfileUpdateSuccessAction => ({
  type: PROFILE_UPDATE_SUCCESS,
  value: user,
});

export const profileUpdateRequestFailedAction = (message: string): IProfileUpdateFailedAction => ({
  type: PROFILE_UPDATE_FAILED,
  value: message,
});

export const logoutRequestAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST
});

export const logoutRequestSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_REQUEST_SUCCESS,
});

export const logoutRequestFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_REQUEST_FAILED,
});

export const resetPasswordRequestAction = (): IResetPasswordAction => ({
  type: RESET_PASSWORD_REQUEST
});

export const resetPasswordRequestSuccessAction = (): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const resetPasswordRequestFailedAction = (message: string): IResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FAILED,
  value: message,
});

export const saveResetPasswordRequestAction = (): ISaveResetPasswordAction => ({
  type: SAVE_RESET_PASSWORD_REQUEST
});

export const saveResetPasswordRequestSuccessAction = (): ISaveResetPasswordSuccessAction => ({
  type: SAVE_RESET_PASSWORD_SUCCESS,
});

export const saveResetPasswordRequestFailedAction = (message: string): ISaveResetPasswordFailedAction => ({
  type: SAVE_RESET_PASSWORD_FAILED,
  value: message,
});

export type TAuthActions =
  | IClearErrorMessage
  | IClearRestoreFlags
  | ILogoutClearProfile
  | IClearProfileSuccess
  | IAuthCheck
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
  | IProfileUpdateFailedAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IResetPasswordAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction
  | ISaveResetPasswordAction
  | ISaveResetPasswordSuccessAction
  | ISaveResetPasswordFailedAction

export const login = ({email, password}: { email: string; password: string }) => (dispatch: AppDispatch) => {
  dispatch(loginRequestAction());
  authService.login(email,password)
    .then(response => {
      if (response.data && response.data?.success) {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        dispatch(loginRequestSuccessAction(response.data.user))
      }
    })
    .catch(err => {
      dispatch(loginRequestFailedAction(err.response?.data?.message))
      console.error(err.response?.data?.message);
    })
}

export const register = ({name, email, password}: {name: string, email: string; password: string}) => (dispatch: AppDispatch) => {
  dispatch(registerRequestAction());
  authService.register(name, email,password)
    .then(response => {
      if (response.data && response.data.success) {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        dispatch(registerRequestSuccessAction(response.data.user))
      }
    })
    .catch(error => {
      dispatch(registerRequestFailedAction(error.response?.data?.message))
      console.error(error.response?.data?.message);
    })
}

export const checkUserAuth = () => (dispatch: AppDispatch) => {
  if (localStorage.getItem('token')) {
    dispatch(profileRequestAction());
    authService.getProfile()
      .then(response => {
        if (response.data && response.data?.success) {
          dispatch(profileRequestSuccessAction(response.data.user))
        }
      })
      .catch(() => {
        dispatch(profileRequestFailedAction());
      })
      .finally(() => {
        dispatch(authCheckRequest());
      })
  } else {
    dispatch({ type: AUTH_CHECK });
    dispatch({
      type:  PROFILE_REQUEST_FAILED,
    });
  }
};

export const updateProfile = ({name, email, password}: {name: string, email: string, password: string}) => (dispatch: AppDispatch) => {
  dispatch(profileUpdateRequestAction());
  authService.updateProfile(name, email, password)
    .then(response => {
      if (response.data && response.data?.success) {
        dispatch(profileUpdateRequestSuccessAction(response.data.user))
        setTimeout(() => {
          dispatch(clearProfileSuccess());
        }, 3000);
      }
    })
    .catch((e) => {
      dispatch(profileUpdateRequestFailedAction(e.response?.data?.message))
      console.error(e.response?.data?.message);
    })
}

export const logout = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem('refreshToken');
  if (!token) {
    return;
  }
  dispatch(logoutRequestAction());
  try {
    const response = await authService.logout(token);
    if (response.data && response.data?.success) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      dispatch(logoutRequestSuccessAction());
      dispatch(logoutClearProfile());
    }
  } catch (e) {
    dispatch(logoutRequestFailedAction());
  }
}

export const resetPassword = ({email}: {email: string}) => async (dispatch: AppDispatch) => {
  dispatch(resetPasswordRequestAction());
  try {
    const response = await authService.resetPassword(email);
    if (response.data && response.data?.success) {
      dispatch(resetPasswordRequestSuccessAction());
    }
  } catch (e) {
    // @ts-ignore
    dispatch(resetPasswordRequestFailedAction(e.response?.data?.message))
    // @ts-ignore
    console.error(e.response?.data?.message);
  }
}

export const saveResetPassword = ({code, password}: {code: string, password: string}) => async (dispatch: AppDispatch) => {
  dispatch(saveResetPasswordRequestAction());
  try {
    const response = await authService.saveResetPassword(code, password);
    if (response.data && response.data?.success) {
      dispatch(saveResetPasswordRequestSuccessAction());
    }
  } catch (e) {
    // @ts-ignore
    dispatch(saveResetPasswordRequestFailedAction(e.response?.data?.message))
    // @ts-ignore
    console.error(e.response?.data?.message);
  } finally {
    dispatch({
      type: CLEAR_PROFILE_SUCCESS,
    });
  }
}