import {
    FETCH_RENTALS_REQ,
    FETCH_RENTALS_FAILURE,
    FETCH_RENTALS,
    ADD_RENTAL_FAIL,
    ADD_RENTAL_SUCCES,
    ADD_RENTAL_REQ,
    APPROVE_RENTAL_FAILURE,
    APPROVE_RENTAL_SUCCES,
    REJECT_RENTAL_SUCCES,
    REJECT_RENTAL_FAILURE,
    COMPLETE_RENTAL_SUCCES,
    COMPLETE_RENTAL_FAILURE
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
      return { ...state, isLoading: true };
    }
    case ADD_RENTAL_SUCCES: {
      return { ...state, isLoading: false };
    }
    case APPROVE_RENTAL_SUCCES: {
      let id = action.payload;
      let rentals2 = state.rentals;
      rentals2.map((rent) => {
        if (rent._id === id) {
          rent.status = true;
        }
      })
      return { ...state, rentals: rentals2};
    }
    case REJECT_RENTAL_SUCCES: {
      return { ...state};
    }
    case COMPLETE_RENTAL_SUCCES: {
      return { ...state};
    }
    case COMPLETE_RENTAL_FAILURE: {
      return { ...state};
    }
    default:
      return state;
  }
};

export default rentalReducer;
