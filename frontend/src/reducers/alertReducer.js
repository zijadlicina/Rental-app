import {
  ADD_FEEDBACK_ALERT_SUCCES,
  ADD_FEEDBACK_ALERT_FAIL
} from "../actions/types";


const initialState = {
  isLoading: false,
  type: null,
  message: "",
  data: null
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default alertReducer;
