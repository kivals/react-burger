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
  RESET_PASSWORD_SUCCESS, SAVE_RESET_PASSWORD_FAILED,
  SAVE_RESET_PASSWORD_REQUEST, SAVE_RESET_PASSWORD_SUCCESS
}
  from "../actions/auth";

const initialState = {
  user: null,
  isAuth: false,
  isAuthChecked: false,
  isLoading: false,
  errorMessage: '',
  successUpdate: false,
  successRestorePassword: false,
  isResetPasswordPage: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        user: {...action.value},
        isAuth: true,
        isLoading: false,
        errorMessage: '',
      }
    }
    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.value,
      }
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        isAuth: false,
      }
    }
    case REGISTER_REQUEST_SUCCESS: {
      return {
        ...state,
        user: {...action.value},
        isAuth: true,
        isLoading: false,
        errorMessage: '',
      }
    }
    case REGISTER_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        errorMessage: action.value,
      }
    }
    case AUTH_CHECK: {
      return {
        ...state,
        isAuthChecked: true
      };
    }
    case PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        isAuth: false,
      }
    }
    case PROFILE_REQUEST_SUCCESS: {
      return {
        ...state,
        user: {...action.value},
        isAuth: true,
        isLoading: false,
        errorMessage: '',
      }
    }
    case PROFILE_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.value,
      }
    }

    case PROFILE_UPDATE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        successUpdate: false,
      }
    }
    case PROFILE_UPDATE_SUCCESS: {
      return {
        ...state,
        user: {...action.value},
        isLoading: false,
        errorMessage: '',
        successUpdate: true,
      }
    }
    case PROFILE_UPDATE_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.value,
        successUpdate: false,
      }
    }
    case CLEAR_PROFILE_SUCCESS: {
      return {
        ...state,
        successUpdate: false,
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      }
    }
    case LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        user: {...action.value},
        isAuth: false,
        isLoading: false,
        errorMessage: '',
      }
    }
    case LOGOUT_REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.value,
      }
    }
    case LOGOUT_CLEAR_PROFILE: {
      return {
        ...state,
        user: null
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isResetPasswordPage: false,
        errorMessage: '',
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isResetPasswordPage: true,
        errorMessage: '',
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        isResetPasswordPage: false,
        errorMessage: action.value,
      }
    }
    case SAVE_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        successRestorePassword: false,
      }
    }
    case SAVE_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        successRestorePassword: true,
      }
    }
    case SAVE_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.value,
        successRestorePassword: false,
      }
    }
    case CLEAR_RESTORE_FLAGS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.value,
        successRestorePassword: false,
        isResetPasswordPage: false,
      }
    }
    case CLEAR_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: "",
      }
    }
    default: {
      return state;
    }
  }
}