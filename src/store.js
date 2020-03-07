import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './features/counter/counterSlice';
import testReducer from "./test/testReducer";
import rootReducer from "./reducers/index";

export default configureStore({
  reducer: {
    //counter: counterReducer,
    test: testReducer,
    difficulty: rootReducer
  }
});
