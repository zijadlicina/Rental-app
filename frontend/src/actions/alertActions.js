import { ADD_FEEDBACK_ALERT_SUCCES, ADD_FEEDBACK_ALERT_FAIL } from "./types";

import axios from "axios";

export const addFeedbackAlertSucces = (data) => {
  return {
    type: ADD_FEEDBACK_ALERT_SUCCES,
    payload: data.feedback
  };
};
export const addFeedbackAlertFail = () => {
  return {
    type: ADD_FEEDBACK_ALERT_FAIL,
  };
};
