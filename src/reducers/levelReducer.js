import { SELECT_LEVEL, CLEAR_LEVEL } from "../actions/types";

// const initialState = {
//   level: -1
// };

export default function(state = -1, action) {
  switch (action.type) {
    case SELECT_LEVEL:
      return action.payload;
    case CLEAR_LEVEL:
      return -1;
    default:
      return state;
  }
}
