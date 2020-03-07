import { SET } from "./testTypes";

export const setTest = value => {
  // console.log("here");
  return {
    type: SET,
    payload: value
  };
};
