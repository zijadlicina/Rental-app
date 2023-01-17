import { CLEAN_ALERT, ADD_FEEDBACK_ALERT_SUCCES, ADD_FEEDBACK_ALERT_FAIL, ADD_BIKE_ALERT_SUCCES, ADD_BIKE_ALERT_FAIL, ADD_RENTAL_ALERT_SUCCES, ADD_RENTAL_ALERT_FAIL } from "./types";

import axios from "axios";

export const cleanAlert = (data) => {
  return {
    type: CLEAN_ALERT,
  }
}
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
export const addBikeAlertSucces = (data) => {
  return {
    type: ADD_BIKE_ALERT_SUCCES,
    payload: data.rental
  };
};
export const addBikeAlertFail = () => {
  return {
    type: ADD_BIKE_ALERT_FAIL,
  };
};
export const addRentalAlertSucces = (data) => {
  return {
    type: ADD_RENTAL_ALERT_SUCCES,
    payload: data.bike
  };
};
export const addRentalAlertFail = () => {
  return {
    type: ADD_RENTAL_ALERT_FAIL,
  };
};
