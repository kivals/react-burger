import authService from "../auth.service";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILED = "LOGIN_REQUEST_FAILED";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_REQUEST_SUCCESS = "REGISTER_REQUEST_SUCCESS";
export const REGISTER_REQUEST_FAILED = "REGISTER_REQUEST_FAILED";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_REQUEST_SUCCESS = "PROFILE_REQUEST_SUCCESS";
export const PROFILE_REQUEST_FAILED = "PROFILE_REQUEST_FAILED";
export const PROFILE_UPDATE_REQUEST = "PROFILE_UPDATE_REQUEST";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAILED = "PROFILE_UPDATE_FAILED";
export const CLEAR_PROFILE_SUCCESS= "CLEAR_PROFILE_SUCCESS";
export const AUTH_CHECK = "AUTH_CHECK";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS";
export const LOGOUT_REQUEST_FAILED = "LOGOUT_REQUEST_FAILED";
export const LOGOUT_CLEAR_PROFILE = "LOGOUT_CLEAR_PROFILE";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const SAVE_RESET_PASSWORD_REQUEST = "SAVE_RESET_PASSWORD_REQUEST";
export const SAVE_RESET_PASSWORD_SUCCESS = "SAVE_RESET_PASSWORD_SUCCESS";
export const SAVE_RESET_PASSWORD_FAILED = "SAVE_RESET_PASSWORD_FAILED";
export const CLEAR_RESTORE_FLAGS = "CLEAR_RESTORE_FLAGS";

export const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";


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