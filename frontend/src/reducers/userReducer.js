import {
  FETCH_USERS_SUCCES,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQ,
} from "../actions/types";

const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCES:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
