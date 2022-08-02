import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  USER_FAIL,
} from "../actions/types";

const token = localStorage.getItem("token"); 

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: token ? token : ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
    case USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: "",
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
