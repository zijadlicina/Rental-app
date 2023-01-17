import {
  ADD_FEEDBACK_ALERT_SUCCES,
  ADD_FEEDBACK_ALERT_FAIL,
  ADD_BIKE_ALERT_FAIL,
  ADD_BIKE_ALERT_SUCCES,
  CLEAN_ALERT,
  ADD_RENTAL_ALERT_SUCCES,
  ADD_RENTAL_ALERT_FAIL
} from "../actions/types";


const initialState = {
  isLoading: false,
  type: null,
  message: "",
  data: null
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAN_ALERT:
      return {
        ...state,
        type: null,
        message: "",
        data: null
      };
    case ADD_FEEDBACK_ALERT_SUCCES:
      return {
        ...state,
        type: "ADD_FEEDBACK",
        message: "You succesfully added a new feedback!",
        data: action.payload
      };
    case ADD_FEEDBACK_ALERT_FAIL:
      return {
        ...state,
        type: "ADD_FEEDBACK_FAIL",
        message: "You can't added a new feedback!",
      };
      case ADD_BIKE_ALERT_SUCCES:
      return {
        ...state,
        type: "ADD_BIKE",
        message: "You succesfully added a new bike!",
        data: action.payload
      };
    case ADD_BIKE_ALERT_FAIL:
      return {
        ...state,
        type: "ADD_BIKE_FAIL",
        message: "You can't added a new bike!",
      };
      case ADD_RENTAL_ALERT_SUCCES:
      return {
        ...state,
        type: "ADD_RENTAL",
        message: "You succesfully send request for rent!",
        data: action.payload
      };
    case ADD_RENTAL_ALERT_FAIL:
      return {
        ...state,
        type: "ADD_RENTAL",
        message: "You can't added a new rent!",
      };
    default:
      return state;
  }
};

export default alertReducer;
