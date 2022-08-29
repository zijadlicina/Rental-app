import {
  FETCH_BIKES_REQ,
  FETCH_BIKES,
  FETCH_BIKES_FAIL
} from "../actions/types";

const initialState = {
  isLoading: false,
  bikes: [],
  page: 1,
  pages: 1
};

const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BIKES_REQ: {
        return {
            ...state,
            isLoading: true,

        }
    }
    case FETCH_BIKES:
      return {
        ...state,
        isLoading: false,
        bikes: action.payload.bikes,
        page: action.payload.page,
        pages: action.payload.pages
      }
    default:
      return state;
  }
};

export default bikeReducer;
