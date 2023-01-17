import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL,
  ADD_BIKE_REQ,
  ADD_BIKE_SUCCES,
  ADD_BIKE_FAIL,
  FETCH_ONE,
  FETCH_REVIEW_REQ,
  FETCH_REVIEW_SUCCES,
  FETCH_REVIEW_FAIL,
  ADD_FEEDBACK_SUCCES,
  ADD_FEEDBACK_REQ,
  CHANGE_CURRENT_BIKE,
} from "./types";
import axios from "axios";
import { cleanErrors, setErrors } from "./errorActions";

import { addBikeAlertSucces, addFeedbackAlertFail, addFeedbackAlertSucces } from "./alertActions";

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
export const changeCurrentBike = () => {
  return {
    type: CHANGE_CURRENT_BIKE,
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
export const fetchReviewsRequest = () => {
  return {
    type: FETCH_REVIEW_REQ,
  };
};
export const fetchReviewsSucces = (data) => {
  return {
    type: FETCH_REVIEW_SUCCES,
    payload: data
  };
};
export const addFeedbackRequest = () => {
  return {
    type: ADD_FEEDBACK_REQ,
  };
};
export const addFeedbackSucces = (data) => {
  return {
    type: ADD_FEEDBACK_SUCCES,
    payload: data,
  };
};

//--------------
export const addBike = (navigate, bike) => {
  if (bike.images.length < 1){
    for (let i = bike.images.length; i < 1; i++){
      bike.images.push("https://res.cloudinary.com/djespjbgy/image/upload/v1666017220/picture_cxgxxg.png")
    }
  }
  return (dispatch) => {
    dispatch(addBikeRequest());
    axios
      .post(`http://localhost:5001/api/bikes/add`, bike)
      .then((response) => {
        dispatch(addBikeSucces(response.data));
        dispatch(addBikeAlertSucces(response.data))
        navigate("/rental")
        dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.data;
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
    query = query ? "?" + query  : ""
    axios
      .get(`http://localhost:5001/api/bikes${query}`)
      .then((response) => {
        dispatch(fetchBikesSucces(response.data));
       // dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(fetchBikesFailure(errMsg));
      });
  };
};

//--------------
export const fetchOneBike = (id, setIsFetched) => {
  return (dispatch) => {
    dispatch(fetchOneBikeRequest());
    axios
      .get(`http://localhost:5001/api/bikes/${id}`)
      .then((response) => {
        dispatch(fetchOneBikeSucces(response.data));
        setIsFetched(true)
     //   dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(setErrors(errMsg, err.response.status, null));
        dispatch(fetchOneBikeFail(errMsg));
      });
  };
};
//--------------
export const fetchReviews = (id) => {
  return (dispatch) => {
    dispatch(fetchReviewsRequest());
    axios
      .get(`http://localhost:5001/api/feedbacks/${id}`)
      .then((response) => {
        dispatch(fetchReviewsSucces(response.data.feedbacks1));
      })
      .catch((err) => {
        const errMsg = err.message;
       // dispatch(setErrors(errMsg, err.response.status, null));
     //   dispatch(fetchOneBikeFail(errMsg));
      });
  };
};
//--------------
export const addFeedback = (feed, navigate, rental) => {
  return (dispatch) => {
    dispatch(addFeedbackRequest());
    axios
      .post(`http://localhost:5001/api/feedbacks/`, feed)
      .then((response) => {
        dispatch(fetchBikes())
        dispatch(addFeedbackSucces(response.data));
        dispatch(addFeedbackAlertSucces(response.data))
      //  dispatch(changeCurrentBike(response.data))
        navigate("/vehicle/" + rental.bike._id);
      //  dispatch(cleanErrors());
      })
      .catch((err) => {
        const errMsg = err.data;
     /*   dispatch(addBikeFailure(errMsg));
        dispatch(
          setErrors(err.response.data.error, err.status, "ADDBIKE_FAIL")
        );
        */
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