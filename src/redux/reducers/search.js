const initialState = {
  text: "",
};
const search = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_TEXT": {
      return {
        ...state,
        text: action.payload,
      };
    }
    default:
      return state;
  }
};

export default search;
