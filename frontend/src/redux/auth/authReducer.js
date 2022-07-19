import { LOGIN_REQUEST, LOGIN_SUCCES, LOGIN_FAILURE } from "./authTypes";

const initialState = {
    loading: false,
    user: '',
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCES:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: '' // ??
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
}

export default authReducer;