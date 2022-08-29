import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL
} from "./types";
import axios from "axios";
import { cleanErrors, setErrors } from "./errorActions";

export const fetchBikesRequest = () => {
  return {
    type: FETCH_BIKES_REQ,
  };
};
export const fetchBikesSucces = (data) => {
  return {
    type: FETCH_BIKES,
    payload: {
      bikes: data.bikes,
      page: data.page,
      pages: data.pages
    },
  };
};
export const fetchBikesFailure = (error) => {
  return {
    type: FETCH_BIKES_FAIL,
    payload: error,
  };
};
//--------------
export const fetchBikes = (query) => {
  return (dispatch) => {
    dispatch(fetchBikesRequest());
    if (query) query = "?" + query;
    else query = "";
    axios
      .get(`http://localhost:5001/api/bikes${query}`)
      .then((response) => {
        dispatch(fetchBikesSucces(response.data));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(fetchBikesFailure(errMsg));
      });
  };
};
