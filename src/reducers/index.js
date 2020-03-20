import { combineReducers } from "redux";
import levelReducer from "./levelReducer";
import wordReducer from "./wordReducer";
import guessReducer from "./guessReducer";

export default combineReducers({
  level: levelReducer,
  words: wordReducer,
  guess: guessReducer
});
