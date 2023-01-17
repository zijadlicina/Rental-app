import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL,
  ADD_BIKE_REQ,
  ADD_BIKE_SUCCES,
  ADD_BIKE_FAIL,
  FETCH_ONE,
  FETCH_ONE_FAIL,
  FETCH_ONE_REQ,
  FETCH_REVIEW_REQ,
  FETCH_REVIEW_SUCCES,
  FETCH_REVIEW_FAIL,
  ADD_FEEDBACK_REQ,
  ADD_FEEDBACK_SUCCES,
} from "../actions/types";


const initialState = {
  loading: false,
  bikes: [],
  current: null,
  reviews: null,
  feedback: null,
  page: 1,
  pages: 1,
};

const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BIKES_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_BIKES:
      return {
        ...state,
        loading: false,
        bikes: action.payload.bikes,
        page: action.payload.page,
        pages: action.payload.pages,
      };
    case FETCH_ONE_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_ONE: {
      return {
        ...state,
        loading: false,
        current: action.payload.current,
      };
    }
    case FETCH_ONE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_BIKE_REQ: {
      return { ...state, loading: true };
    }
    case ADD_BIKE_SUCCES: {
      return { ...state, loading: false };
    }
    case FETCH_REVIEW_REQ: {
      return { ...state, loading: true };
    }
    case FETCH_REVIEW_SUCCES: {
      let reviews = action.payload;
      return { ...state, reviews, loading: false };
    }
    case ADD_FEEDBACK_REQ: {
      return { ...state, loading: true };
    }
    case ADD_FEEDBACK_SUCCES: {
      return { ...state, feedback: action.payload, loading: false };
    }
    default:
      return state;
  }
};

export default bikeReducer;
