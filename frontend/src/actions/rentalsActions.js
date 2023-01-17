import {
  ADD_RENTAL_FAIL,
  ADD_RENTAL_REQ,
  ADD_RENTAL_SUCCES,
  APPROVE_RENTAL_FAILURE,
  APPROVE_RENTAL_SUCCES,
  COMPLETE_RENTAL_FAILURE,
  COMPLETE_RENTAL_SUCCES,
  FETCH_RENTALS,
  FETCH_RENTALS_FAILURE,
  FETCH_RENTALS_REQ,
  REJECT_RENTAL_FAILURE,
  REJECT_RENTAL_SUCCES
} from "./types";
import axios from "axios";
import { cleanErrors, setErrors } from "./errorActions";
import { addRentalAlertSucces } from "./alertActions";

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
export const approveRentalSucces = (id) => {
  return {
    type: APPROVE_RENTAL_SUCCES,
    payload: id
  };
};
export const approveRentalFailure = (error) => {
  return {
    type: APPROVE_RENTAL_FAILURE,
    payload: error,
  };
};
export const rejectRentalSucces = (rental) => {
  return {
    type: REJECT_RENTAL_SUCCES,
  };
};
export const rejectRentalFailure = (error) => {
  return {
    type: REJECT_RENTAL_FAILURE,
    payload: error,
  };
};
export const completeRentalSucces = (rental) => {
  return {
    type: COMPLETE_RENTAL_SUCCES,
  };
};
export const completeRentalFailure = (error) => {
  return {
    type: COMPLETE_RENTAL_FAILURE,
    payload: error,
  };
};
//--------------
export const addRental = (navigate, to, rent) => {
  return (dispatch) => {
    dispatch(addRentalReq());
    axios
      .post(`http://localhost:5001/api/rentals`, rent)
      .then((response) => {
        dispatch(addRentalSucces(response.data));
        dispatch(addRentalAlertSucces(response.data))
        dispatch(cleanErrors());
        navigate("/rents?user=", to)
      })
      .catch((err) => {
        const errMsg = err.message;
      //  dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(addRentalFailure(errMsg));
      });
  };
};
export const completedRental= (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5001/api/rentals/${id}`, data)
      .then((response) => {
        dispatch(completeRentalSucces(id));
//        dispatch(addRentalAlertSucces(response.data))
//        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
      //  dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(completeRentalFailure(errMsg));
      });
  };
};

export const approveRental = (id, data, setReload) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5001/api/rentals/${id}`, data)
      .then((response) => {
        dispatch(approveRentalSucces(id));
        setReload(Math.random())
//        dispatch(addRentalAlertSucces(response.data))
//        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
      //  dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(approveRentalFailure(errMsg));
      });
  };
};

export const rejectRental = (id, data, setReload) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:5001/api/rentals/${id}`, data)
      .then((response) => {
        dispatch(rejectRentalSucces(response.data));
        setReload(Math.random())
//        dispatch(addRentalAlertSucces(response.data))
//        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
      //  dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(rejectRentalFailure(errMsg));
      });
  };
};

export const fetchRentals = (query) => {
  return (dispatch) => {
    dispatch(fetchRentalsReq());
    if (query) query = "?" + query;
    else query = "";
    axios
      .get(`http://localhost:5001/api/rentals${query}`)
      .then((response) => {
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
