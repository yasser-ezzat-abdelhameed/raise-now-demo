import { postMode } from "../api";

export const SET_MODE = "SET_MODE";
export const RESET_MODE = "RESET_MODE";
export const SET_LOADING = "SET_LOADING";

export const setMode = (mode) => ({
  type: SET_MODE,
  mode,
});

const resetMode = () => ({
  type: RESET_MODE,
});

const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const handlePostMode = () => async (dispatch, getState) => {
  try {
    // getting the current mode from the store
    const { mode } = getState();

    // firing the loading indicator for better UX
    dispatch(setLoading(true));

    // calling the postMode api service, getting data on success
    const data = await postMode(mode);

    // hiding the loading indicator
    dispatch(setLoading(false));

    // resetting the mode to nothing
    dispatch(resetMode());

    // showing an alert with the data just received from the api service
    alert(data);
  } catch (e) {
    // hiding the loading indicator
    dispatch(setLoading(false));

    // showing an alert with the error if any
    alert(e.message);
  }
};
