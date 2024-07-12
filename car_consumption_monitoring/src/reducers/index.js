import { combineReducers } from "redux";
import refuelEventsReducer from "./refuelEventsReducer";

export default combineReducers({
  refuelEvents: refuelEventsReducer,
});