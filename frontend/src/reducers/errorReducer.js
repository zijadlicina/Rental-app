import { GET_ERRORS, CLEAN_ERRORS } from "../actions/types";

const initialState = {
    msg: {},
    status: null,
    id: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ERRORS:
        return {
          ...state,
          msg: action.payload.msg,
          status: action.payload.status,
          id: action
        };
      case CLEAN_ERRORS:
        return {
          ...state,
          msg: {},
          status: null,
          id: null
        };
      default:
        return state;
    }
}

export default errorReducer;