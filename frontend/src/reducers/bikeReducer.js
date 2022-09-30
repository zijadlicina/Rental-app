import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL,
  ADD_BIKE_REQ,
  ADD_BIKE_SUCCES,
  ADD_BIKE_FAIL,
  FETCH_ONE,
  FETCH_ONE_FAIL,
  FETCH_ONE_REQ
} from "../actions/types";

const initialState = {
  loading: false,
  bikes: [],
  current: null,
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
    default:
      return state;
  }
};

export default bikeReducer;
