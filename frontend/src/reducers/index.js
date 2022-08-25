import { combineReducers } from "redux";
import authReducer from './authReducer'
import errorReducer from "./errorReducer";
import bikeReducer from './bikeReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bike: bikeReducer
});

export default rootReducer;