import {  CLEAN_ERRORS, SET_ERRORS } from "../actions/types";

const initialState = {
    msg: '',
    status: null,
    id: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ERRORS:
        return {
          ...state,
          msg: action.payload.msg,
          status: action.payload.status,
          id: action.payload.id,
        };
      case CLEAN_ERRORS:
        return {
          ...state,
          msg: '',
          status: null,
          id: null
        };
      default:
        return state;
    }
}

export default errorReducer;