import { FETCH_MESSAGES_REQ, FETCH_MESSAGES_SUCCES, FETCH_MESSAGES_FAIL, UPDATE_MESSAGE, UPDATE_MESSAGE_SUCCES } from "./types";

import axios from "axios";

export const fetchMessagesReq = () => {
  return {
    type: FETCH_MESSAGES_REQ,
  };
};
export const fetchMessagesFail = () => {
  return {
    type: FETCH_MESSAGES_FAIL,
  };
};
export const fetchMessagesSucces = (data) => {
  return {
    type: FETCH_MESSAGES_SUCCES,
    payload: data
  };
};
export const updateMessageReq = () => {
  return {
    type: UPDATE_MESSAGE,
  };
};
export const updateMessageSucces = (data) => {
  return {
    type: UPDATE_MESSAGE_SUCCES,
  };
};


export const fetchMessages = (id) => {
  return (dispatch) => {
    dispatch(fetchMessagesReq());
    axios
      .get(`http://localhost:5001/api/messages/${id}`)
      .then((response) => {
        dispatch(fetchMessagesSucces(response.data));
      //  dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
    //    dispatch(setErrors(errMsg, err.response.status, null));
     //   dispatch(fetchRentalsFailure(errMsg));
      });
  };
};


export const updateMessage = (id, status, setRefreshNavbar) => {
  return (dispatch) => {
    dispatch(updateMessageReq());
    axios
      .put(`http://localhost:5001/api/messages/${id}`, status)
      .then((response) => {
        dispatch(updateMessageSucces(response.data));
        setRefreshNavbar(Math.random())
      //  dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
    //    dispatch(setErrors(errMsg, err.response.status, null));
     //   dispatch(fetchRentalsFailure(errMsg));
      });
  };
};