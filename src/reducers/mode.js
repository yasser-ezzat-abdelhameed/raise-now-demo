import { SET_MODE, RESET_MODE } from "../actions";

export default function mode(state = null, action) {
  switch (action.type) {
    case SET_MODE:
      return action.mode;
    case RESET_MODE:
      return null;
    default:
      return state;
  }
}
