const initialState = {
  checkBusido: false,
};
const category = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHECK_BUSIDO": {
      return {
        ...state,
        checkBusido: action.payload,
      };
    }
    default:
      return state;
  }
};

export default category;
