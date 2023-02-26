import axios, {AxiosHeaders, AxiosInstance, AxiosRequestConfig} from "axios";
import {API_AUTH_URL} from "../utils/consts";

const $api: AxiosInstance = axios.create({
  baseURL: API_AUTH_URL,
})

$api.interceptors.request.use(async (config: AxiosRequestConfig ) => {
  const token = `${localStorage.getItem('token')}`;
  if (config.headers) {
    (config.headers as AxiosHeaders).set("Authorization", token);
  }
  return config;
})

$api.interceptors.response.use((config) => {
  return config;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 403 && error.config && !error.config._isRetry) {
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