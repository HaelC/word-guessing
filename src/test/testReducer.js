import { SET } from "./testTypes";

const initialState = {
  val: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET:
      return {
        // ...state,
        val: action.payload
      };
    default:
      return state;
  }
}
