import axios from "axios";

const BASE = process.env.REACT_APP_API_ENDPOINT;

export async function postMode(mode) {
  try {
    const { data } = await axios.post(`${BASE}mode`, {
      mode,
    });
    return data;
  } catch (e) {
    return e.message;
  }
}
