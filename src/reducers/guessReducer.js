import { COUNT_CORRECT, TAKE_TURN, INIT_CHANCE } from "../actions/types";

const initialState = {
  chances: 4,
  correct: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INIT_CHANCE:
      return {
        ...state,
        chances: 4,
        correct: -1
      };
    case COUNT_CORRECT:
      return {
        ...state,
        correct: action.payload
      };
    case TAKE_TURN:
      return {
        ...state,
        chances: state.chances - action.payload
      };
    default:
      return state;
  }
}
