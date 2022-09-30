import {
  ADD_RENTAL_FAIL,
  ADD_RENTAL_REQ,
  ADD_RENTAL_SUCCES,
  FETCH_RENTALS,
  FETCH_RENTALS_FAILURE,
  FETCH_RENTALS_REQ
} from "./types";
import axios from "axios";
import { cleanErrors, setErrors } from "./errorActions";

export const fetchRentalsReq = () => {
  return {
    type: FETCH_RENTALS_REQ,
  };
};
export const fetchRentalsSucces = (rentals) => {
  return {
    type: FETCH_RENTALS,
    payload: rentals,
  };
};
export const fetchRentalsFailure = (error) => {
  return {
    type: FETCH_RENTALS_FAILURE,
    payload: error,
  };
};
export const addRentalReq = () => {
  return {
    type: ADD_RENTAL_REQ,
  };
};
export const addRentalSucces = (rental) => {
  return {
    type: ADD_RENTAL_SUCCES,
    payload: rental,
  };
};
export const addRentalFailure = (error) => {
  return {
    type: ADD_RENTAL_FAIL,
    payload: error,
  };
};
//--------------
export const addRental = (rent) => {
  console.log("ovdjeeee", rent)
  return (dispatch) => {
    dispatch(addRentalReq());
    axios
      .post(`http://localhost:5001/api/rentals`, rent)
      .then((response) => {
        console.log("response", response.data.rentals)
        dispatch(addRentalSucces(response.data));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
        console.log(err.message)
      //  dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(addRentalFailure(errMsg));
      });
  };
  
};

export const fetchRentals = (query) => {
  console.log("query", query)
  return (dispatch) => {
    dispatch(fetchRentalsReq());
    if (query) query = "?" + query;
    else query = "";
    axios
      .get(`http://localhost:5001/api/rentals${query}`)
      .then((response) => {
        console.log("response", response.data)
        dispatch(fetchRentalsSucces(response.data));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
    //    dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(fetchRentalsFailure(errMsg));
      });
  };
};
/*
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
*/


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
