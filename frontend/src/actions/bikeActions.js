import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL,
  ADD_BIKE_REQ,
  ADD_BIKE_SUCCES,
  ADD_BIKE_FAIL,
  FETCH_ONE,
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
export const fetchOneBikeRequest = () => {
  return {
    type: FETCH_BIKES_REQ,
  };
};
export const fetchOneBikeSucces = (data) => {
  return {
    type: FETCH_ONE,
    payload: {
      current: data.bike
    },
  };
};
export const fetchOneBikeFail = (error) => {
  return {
    type: FETCH_BIKES_FAIL,
    payload: error,
  };
};
export const addBikeRequest = () => {
  return {
    type: ADD_BIKE_REQ,
  };
};
export const addBikeSucces = (bike) => {
  return {
    type: ADD_BIKE_SUCCES,
    payload: bike
  };
};
export const addBikeFailure = (error) => {
  return {
    type: ADD_BIKE_FAIL,
    payload: error,
  };
};
//--------------
export const addBike = (bike) => {
  console.log(">bike",bike)
  return (dispatch) => {
    dispatch(addBikeRequest());
    axios
      .post(`http://localhost:5001/api/bikes/add`, bike)
      .then((response) => {
        dispatch(addBikeSucces(response.data));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.data;
        console.log(err.response.data.error);
        dispatch(addBikeFailure(errMsg));
        dispatch(
          setErrors(err.response.data.error, err.status, "ADDBIKE_FAIL")
        );
      });
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

//--------------
export const fetchOneBike = (id) => {
  return (dispatch) => {
    dispatch(fetchOneBikeRequest());
    axios
      .get(`http://localhost:5001/api/bikes/${id}`)
      .then((response) => {
        console.log("response", response.data)
        dispatch(fetchOneBikeSucces(response.data));
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(fetchOneBikeFail(errMsg));
      });
  };
};
/*
export const getCategory = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5001/api/categories/${id}`)
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
*/