import $api from "../http";
import axios from "axios";
import {BASE_API_URL} from "../utils/consts";

const login = async (email: string, password: string) => {
  return $api.post('/login', {email, password});
};

const register = async (name: string, email: string, password: string) => {
  return $api.post('/register', {name, email, password});
};

const getProfile = async () => {
  return $api.get('/user');
};

const updateProfile = async (name: string, email: string, password: string) => {
  return $api.patch('/user', {name, email, password});
}

const logout = async (token: string) => {
  return $api.post('/logout', { token });
};

const resetPassword = async (email: string) => {
  return axios.post(`${BASE_API_URL}/password-reset`, email);
}

const saveResetPassword = async (code: string, password: string) => {
  return axios.post(`${BASE_API_URL}/password-reset/reset`, {password, token: code})
}

const authService = {
  login,
  register,
  getProfile,
  updateProfile,
  logout,
  resetPassword,
  saveResetPassword,
};

export default authService;
