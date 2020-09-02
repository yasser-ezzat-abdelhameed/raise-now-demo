import { combineReducers } from "redux";
import mode from "./mode";
import loading from "./loading";

const reducers = combineReducers({
  mode,
  loading,
});

export default reducers;
