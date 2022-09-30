import { FETCH_USERS_REQ, FETCH_USERS_SUCCES, FETCH_USERS_FAILURE } from "./types";

import axios from "axios";

export const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQ,
  };
};
export const fetchUsersSucces = (users) => {
  return {
    type: FETCH_USERS_SUCCES,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch, getState) => {
    dispatch(fetchUsersReq());
    axios
      .get(`http://localhost:5001/api/users`)
      .then((response) => {
        let users = response.data.users;
        dispatch(fetchUsersSucces(users));
      })
      .catch((err) => {
        let errRes = err.response;
        dispatch(fetchUsersFailure(errRes));
      });
  };
};
