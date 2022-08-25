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
export const fetchBikesSucces = (bikes) => {
  return {
    type: FETCH_BIKES,
    payload: {
      bikes
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
export const fetchBikes = () => {
  return (dispatch) => {
    dispatch(fetchBikesRequest());
    axios
      .get("http://localhost:5001/api/bikes")
      .then((response) => {
        dispatch(fetchBikesSucces(response.data.bikes));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(fetchBikesFailure(errMsg));
      });
  };
};
