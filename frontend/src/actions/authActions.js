import {
  FORGOTPASSWORD_REQUEST,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_FAIL,
  RESETPASSWORD_REQUEST,
  RESETPASSWORD_SUCCESS,
  RESETPASSWORD_FAIL,
  FETCH_USER_REQ,
  FETCH_USER_SUCCES,
  FETCH_USER_FAILURE
} from "./types";
import axios from "axios";
import { cleanErrors, setErrors } from "./errorActions";

export const loginUserRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export const loginSucces = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error,
  };
};
export const logoutSucces = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
export const loadUserRequest = () => {
  return {
    type: USER_LOADING,
  };
};
export const loadUserSucces = (user) => {
  return {
    type: USER_LOADED,
    payload: user,
  };
};
export const loadUserFail = (err) => {
  return {
    type: USER_FAIL,
    payload: err,
  };
};
export const registerUserRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};
export const registerUserSucces = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};
export const registerUserFailure = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};
export const forgotPasswordRequest = () => {
  return {
    type: FORGOTPASSWORD_REQUEST,
  };
};
export const forgotPasswordSuccess = (email) => {
  return {
    type: FORGOTPASSWORD_SUCCESS,
    payload: email,
  };
};
export const forgotPasswordFailure = (error) => {
  return {
    type: FORGOTPASSWORD_FAIL,
    payload: error,
  };
};
export const resetPasswordRequest = () => {
  return {
    type: RESETPASSWORD_REQUEST,
  };
};
export const resetPasswordSuccess = (object) => {
  return {
    type: REGISTER_SUCCESS,
    payload: object,
  };
};
export const resetPasswordFailure = (error) => {
  return {
    type: RESETPASSWORD_FAIL,
    payload: error,
  };
};

//--------------
export const loginUser = (user) => {
  console.log("user", user)
  return (dispatch) => {
    dispatch({ type: USER_LOADING });
    axios
      .post("http://localhost:5001/api/auth/login", user)
      .then((response) => {
        time(dispatch, response);
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(loginFailure(errMsg));
      });
  };
};

  const time = (dispatch, response) => {
    setTimeout(() => {
      dispatch(loginSucces(response.data));
      dispatch(cleanErrors());
    }, 3000);
  };


export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutSucces());
    localStorage.removeItem("token");
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch(loadUserRequest());
    axios
      .get("http://localhost:5001/api/auth", getToken(getState))
      .then((response) => {
        let user = response.data;
        dispatch(loadUserSucces(user));
      })
      .catch((err) => {
        let errRes = err.response;
        dispatch(loadUserFail(errRes));
      });
  };
};

export const registerUser = (user, navigate) => {
  return (dispatch) => {
    dispatch(registerUserRequest());
    axios
      .post("http://localhost:5001/api/auth/register", user)
      .then((response) => {
        let res = response.data;
        dispatch(registerUserSucces(res));
        dispatch(cleanErrors());
        navigate("/");        
      })
      .catch((err) => {
        let errRes = err.response;
        dispatch(registerUserFailure(err.response));
        dispatch(setErrors(errRes.data.error, errRes.status, "REGISTER_FAIL"));
      });
  };
};
export const forgotPassword = (email) => {
  return (dispatch) => {
    dispatch(forgotPasswordRequest());
    axios
      .post("http://localhost:5001/api/auth/forgotPassword", email)
      .then((response) => {
        let user = response.data;
        dispatch(forgotPasswordSuccess(user));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        let errRes = err.response;
        dispatch(forgotPasswordFailure(err.response));
        dispatch(
          setErrors(errRes.data.error, errRes.status, "FORGOTPASSWORD_FAIL")
        );
      });
  };
};
export const resetPassword = ({object}) => {
  return (dispatch) => {
    dispatch(resetPasswordRequest());
    /*
    axios
      .post("http://localhost:5001/api/auth/resetPassword", object)
      .then((response) => {
        let user = response.data;
        dispatch(resetPasswordSuccess(object));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        let errRes = err.response;
        dispatch(resetPasswordFailure(err.response));
        dispatch(
          setErrors(errRes.data.error, errRes.status, "RESET_PASSWORD_FAIL")
        );
      });
      */
  };
};

// get token from local storage
const getToken = (getState) => {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: null,
    },
  };

  // if token, add to headers
  if (token) {
    const bearer = "Bearer " + token;
    config.headers["authorization"] = bearer;
  }
  return config;
};
