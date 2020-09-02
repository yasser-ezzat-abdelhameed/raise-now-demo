import axios from "axios";

export async function postMode(mode) {
  try {
    const { data } = await axios.post(
      "https://fend-tavel-app.herokuapp.com/mode",
      {
        mode,
      }
    );
    return data;
  } catch (e) {
    return e.message;
  }
}
