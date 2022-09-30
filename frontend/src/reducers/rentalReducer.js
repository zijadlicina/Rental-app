import {
    FETCH_RENTALS_REQ,
    FETCH_RENTALS_FAILURE,
    FETCH_RENTALS,
    ADD_RENTAL_FAIL,
    ADD_RENTAL_SUCCES,
    ADD_RENTAL_REQ
} from "../actions/types";

const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  rentals: [],
};

const rentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RENTALS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RENTALS:
      return {
        ...state,
        isLoading: false,
        rentals: action.payload.rentals,
      };
    case FETCH_RENTALS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_RENTAL_REQ: {
      console.log("ADD_RENTAL_REQ");
      return { ...state, isLoading: true };
    }
    case ADD_RENTAL_SUCCES: {
      console.log("RENTAL_SUCCES");
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};

export default rentalReducer;
