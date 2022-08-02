import { SET_ERRORS, CLEAN_ERRORS } from "./types";

export const setErrors = (msg, status, id) => {
  return {
    type: SET_ERRORS,
    payload: { msg, status, id },
  };
};

export const cleanErrors = () => {
  return {
    type: CLEAN_ERRORS,
  };
};
