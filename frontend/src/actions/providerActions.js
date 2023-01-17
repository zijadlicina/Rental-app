import { FETCH_ONE_PROVIDER, FETCH_ONE_PROVIDER_SUCCES,CLEAN_PROVIDER, FETCH_PROVIDERS_REQ, FETCH_PROVIDERS_SUCCES  } from "./types";

import axios from "axios";

export const fetchOneProviderReq = () => {
  return {
    type: FETCH_ONE_PROVIDER,
  };
};
export const fetchOneProviderSucces = (data) => {
  return {
    type: FETCH_ONE_PROVIDER_SUCCES,
    payload: data
  };
};
export const fetchProvidersReq = () => {
  return {
    type: FETCH_PROVIDERS_REQ,
  };
};
export const fetchProvidersSucces = (data) => {
  return {
    type: FETCH_PROVIDERS_SUCCES,
    payload: data
  };
};
export const cleanProvider = () => {
  return {
    type: CLEAN_PROVIDER,
  };
};
export const fetchProviders = () => {
  return (dispatch) => {
    dispatch(fetchProvidersReq());
    axios
      .get(`http://localhost:5001/api/providers`)
      .then((response) => {
        dispatch(fetchProvidersSucces(response.data));
      //  dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
    //    dispatch(setErrors(errMsg, err.response.status, null));
     //   dispatch(fetchRentalsFailure(errMsg));
      });
  };
};

export const fetchOneProvider = (id) => {
  return (dispatch) => {
    dispatch(fetchOneProviderReq());
    axios
      .get(`http://localhost:5001/api/providers/${id}`)
      .then((response) => {
        dispatch(fetchOneProviderSucces(response.data));
      //  dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
    //    dispatch(setErrors(errMsg, err.response.status, null));
     //   dispatch(fetchRentalsFailure(errMsg));
      });
  };
};
