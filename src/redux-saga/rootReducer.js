import { combineReducers } from "redux";
import userReducer from "./product/reducer/reducer";

let rootReducers = combineReducers({
  userReducer,
});

export default rootReducers;