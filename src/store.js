// import { configureStore } from "@reduxjs/toolkit";
// // import counterReducer from './features/counter/counterSlice';
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import testReducer from "./test/testReducer";
// import rootReducer from "./reducers/index";
// import levelReducer from "./reducers/levelReducer";
// import wordReducer from "./reducers/wordReducer";

// const middleWare = applyMiddleware[thunk];

// export default configureStore({
//   reducer: {
//     //counter: counterReducer,
//     // test: testReducer,
//     difficulty: rootReducer,
//     level: levelReducer,
//     words: wordReducer
//   },
//   middleWare
// });

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
