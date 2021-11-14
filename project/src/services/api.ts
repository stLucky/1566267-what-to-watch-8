import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios';
import { ERROR_401, ERROR_404 } from '../const';
import { getToken } from './token';

const BACKEND_URL = 'https://8.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = ERROR_401,
  NotFound = ERROR_404,
}

type UnauthorizedCallback = () => void;

export const createAPI = (
  onUnauthorized: UnauthorizedCallback,
): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
        return Promise.reject(HttpCode.Unauthorized);
      }

      if (response?.status === HttpCode.NotFound) {
        return Promise.reject(HttpCode.NotFound);
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
