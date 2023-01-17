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
  authorization: {
    isGuest: true,
    isUser: false,
    isAgency: false,
    isAdmin: false,
  },
  user: null,
  token: token ? token : "",
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
      let roles1 = action.payload.user.roles;
      let auth1 = {
        isUser: false,
        isAgency: false,
        isAdmin: false,
      };
      if (roles1.includes("2001")) { auth1.isUser = true; auth1.isGuest = false; }
      if (roles1.includes("5501")) { auth1.isAdmin = true; auth1.isGuest = false; }
      if (roles1.includes("1994")) {
        auth1.isAdmin = true;
        auth1.isGuest = false;
      }
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        authorization: auth1,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      let roles = action.payload.user.roles;
      let auth = {
        isUser: false,
        isAgency: false,
        isAdmin: false,
      };
      if (roles.includes("2001")) {
        auth.isUser = true;
        auth.isGuest = false;
      }
      if (roles.includes("5501")) {
        auth.isAdmin = true;
        auth.isGuest = false;
      }
      if (roles.includes("1994")) {
        auth.isAgency = true;
        auth.isGuest = false;
      }
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
        authorization: auth
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
        user: null,
        authorization: {
          isUser: false,
          isAgency: false,
          isAdmin: false,
          isGuest: true,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
