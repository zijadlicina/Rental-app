import { combineReducers } from "redux";
import authReducer from './authReducer'
import errorReducer from "./errorReducer";
import bikeReducer from './bikeReducer'
import rentalReducer from "./rentalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bike: bikeReducer,
  rental: rentalReducer,
  user: userReducer
});

export default rootReducer;