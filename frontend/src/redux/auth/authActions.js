import { LOGIN_REQUEST, LOGIN_SUCCES, LOGIN_FAILURE } from "./authTypes";
import axios from 'axios';
const API_URL = '/api/auth/login';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
export const loginSucces = (user) => {
  return {
    type: LOGIN_SUCCES,
    payload: user
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

//--------------
export const loginUser = (user) => {
    return (dispatch) => {
        dispatch(loginRequest)
        axios
          .post("http://localhost:5001/api/auth/login", user)
          .then((response) => {
            dispatch(loginSucces(response.data));
          })
          .catch((err) => {
            const errMsg = err.message;
            dispatch(loginFailure(errMsg));
          });
    }
}