import {
  FETCH_WORDS,
  CREATE_DICT,
  SHOW_CANDIDATES,
  GENERATE_TARGETS
} from "../actions/types";

const initialState = {
  words: [],
  dict: {},
  candidates: [],
  answer: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORDS:
      return {
        ...state,
        words: action.payload
      };
    case CREATE_DICT:
      return {
        ...state,
        dict: action.payload
      };
    case SHOW_CANDIDATES:
      return {
        ...state,
        candidates: state.dict[action.payload].slice(0, 10),
        answer: state.dict[action.payload][0]
      };
    case GENERATE_TARGETS:
      return {
        ...state,
        candidates: state.dict[action.payload.wordLength].slice(
          0,
          action.payload.wordNumber
        ),
        answer: state.dict[action.payload.wordLength][0]
      };
    default:
      return state;
  }
}
