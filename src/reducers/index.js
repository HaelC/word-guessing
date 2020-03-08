import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import wordReducer from "./wordReducer";

export default combineReducers({
  level: levelReducer,
  words: wordReducer
});
