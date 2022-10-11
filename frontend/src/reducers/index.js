import { combineReducers } from "redux";
import authReducer from './authReducer'
import errorReducer from "./errorReducer";
import bikeReducer from './bikeReducer'
import rentalReducer from "./rentalReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bike: bikeReducer,
  rental: rentalReducer,
  user: userReducer,
  alert: alertReducer
});

export default rootReducer;