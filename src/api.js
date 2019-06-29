import axios from "axios";
import history from "./history.js";
import {API_CONFIG, SERVER_RESPONCES} from "./constants.js";

const createAPI = () => {
  const api = axios.create(API_CONFIG);

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.response.status === SERVER_RESPONCES.FORBIDDEN) {
      history.push(`/login`);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
