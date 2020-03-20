import { COUNT_CORRECT, TAKE_TURN, INIT_CHANCE } from "./types";

export const countCorrect = (guessed, correct) => dispatch => {
  let count = 0;
  for (let i = 0; i < correct.length; i++) {
    if (guessed.toLowerCase()[i] === correct[i]) {
      count++;
    }
  }
  dispatch({
    type: COUNT_CORRECT,
    payload: count
  });
};

export const takeTurn = (guessed, correct) => dispatch => {
  dispatch({
    type: TAKE_TURN,
    payload: guessed.toLowerCase() === correct.toLowerCase() ? 0 : 1
  });
};

export const initChance = () => dispatch => {
  dispatch({
    type: INIT_CHANCE
  });
};
