import { SELECT_LEVEL, CLEAR_LEVEL } from "./types";

export const selectLevel = level => {
  return {
    type: SELECT_LEVEL,
    payload: level
  };
};

export const clearLevel = () => dispatch => {
  dispatch({
    type: CLEAR_LEVEL,
    payload: -1
  });
};
