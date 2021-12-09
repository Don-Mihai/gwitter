const initialState = {
  user: {
    firstName: "example",
    lastName: "example",
  },
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default user;
