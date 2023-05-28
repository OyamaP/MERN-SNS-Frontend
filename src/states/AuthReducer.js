const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        isError: false,
        reason: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        isError: false,
        reason: null,
      };
    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false,
        isError: true,
        // isError: action.payload,
        reason: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
