import axios from "axios";

export const API_URL = `https://dev.trainee.dex-it.ru/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: any) => {
  config.headers.Autharization = `Bearer ${localStorage.getItem(`token`)}`;
  return config;
});

export default $api;
