import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL
} from "../actions/types";

const initialState = {
  isLoading: false,
  bikes: []
};

const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BIKES_REQ: {
        return {
            ...state,
            isLoading: true
        }
    }
    case FETCH_BIKES:
      return {
        ...state,
        isLoading: false,
        bikes: action.payload.bikes
      }
    default:
      return state;
  }
};

export default bikeReducer;
