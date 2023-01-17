import { combineReducers } from "redux";
import authReducer from './authReducer'
import errorReducer from "./errorReducer";
import bikeReducer from './bikeReducer'
import rentalReducer from "./rentalReducer";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import providerReducer from "./providerReducer";
import messageReducer from "./messageReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bike: bikeReducer,
  rental: rentalReducer,
  user: userReducer,
  alert: alertReducer,
  provider: providerReducer,
  message: messageReducer,
  menu: menuReducer
});

export default rootReducer;