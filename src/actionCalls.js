import axios from "axios";

export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", user);
    await dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (e) {
    await dispatch({ type: "LOGIN_ERROR", payload: e });
  }
};
