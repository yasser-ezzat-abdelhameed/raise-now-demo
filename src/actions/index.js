import { postMode } from "../api";

export const SET_MODE = "SET_MODE";
export const RESET_MODE = "RESET_MODE";

export const setMode = (mode) => ({
  type: SET_MODE,
  mode,
});

const resetMode = () => ({
  type: RESET_MODE,
});

export const handlePostMode = () => async (dispatch, getState) => {
  try {
    const { mode } = getState();
    const data = await postMode(mode);
    alert(data);
    dispatch(resetMode());
  } catch (e) {
    alert(e.message);
  }
};
