import {
  FETCH_MESSAGES_REQ,
  FETCH_MESSAGES_SUCCES,
  UPDATE_MESSAGE,
  UPDATE_MESSAGE_SUCCES
} from "../actions/types";


const initialState = {
  isLoading: false,
  messages: [],
  unSeen: 0,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_REQ:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_MESSAGES_SUCCES:
      return {
        ...state,
        isLoading: false,
        messages: action.payload.messages,
        unSeen: action.payload.unSeen,
      };
      case UPDATE_MESSAGE:
        return {
          ...state,
          isLoading: true
        };
      case UPDATE_MESSAGE_SUCCES:
        return {
          ...state,
          isLoading: false,
        };
    default:
      return state;
  }
};

export default messageReducer;
