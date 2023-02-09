import axios from "axios";
import {API_AUTH_URL} from "../utils/consts";

const $api = axios.create({
  baseURL: API_AUTH_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `${localStorage.getItem('token')}`;
  return config;
})

$api.interceptors.response.use((config) => {
  return config;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 403 && error.config && !error.config._isRetry) {
    console.log("ОБНОВИТЬ REFRESH TOKEN");
    error.config._isRetry = true;
    const response = await axios.post(
      `${API_AUTH_URL}/token`,
      {token: localStorage.getItem('refreshToken')}
    );
    localStorage.setItem('token', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return $api.request(originalRequest);
  }
  throw error;
})

export default $api;