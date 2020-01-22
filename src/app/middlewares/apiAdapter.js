import axios from 'axios';
import setUp from '../../config';

const omie = axios.create({
  baseURL: setUp.omieURL,
});
const isHandlerEnabled = (config = {}) => {
  return !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled);
};
const requestHandler = async request => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    request.data.app_key = '1560731700';
    request.data.app_secret = '226dcf372489bb45ceede61bfd98f0f1';
    request.headers['Content-type'] = 'application/json';
  }
  return request;
};
omie.interceptors.request.use(request => requestHandler(request));

const errorHandler = async error => {
  if (isHandlerEnabled(error.config)) {
  }
  return await Promise.reject({ ...error });
};

const successHandler = async response => {
  if (isHandlerEnabled(response.config)) {
  }
  return response;
};
omie.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);
export default omie;
