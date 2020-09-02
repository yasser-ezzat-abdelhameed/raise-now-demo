export const SET_MODE = "SET_MODE";
export const RESET_MODE = "RESET_MODE";

export const setMode = (mode) => ({
  type: SET_MODE,
  mode,
});

export const resetMode = () => ({
  type: RESET_MODE,
});
