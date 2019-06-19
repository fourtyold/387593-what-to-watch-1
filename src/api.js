import axios from "axios";
import {ActionCreators} from "./reducer/user/user.js";

const CONFIG = {
  baseURL: `https://es31-server.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true
};

const SERVER_RESPONCES = {
  FORBIDDEN: 403
};

const createAPI = (dispatch) => {
  const api = axios.create(CONFIG);

  const onSuccess = (response) => response;
  const onFail = (error) => {
    if (error.responce.status === SERVER_RESPONCES.FORBIDDEN) {
      dispatch(ActionCreators.requireAuthorization(true));
      history.pushState(null, null, `/login`);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
