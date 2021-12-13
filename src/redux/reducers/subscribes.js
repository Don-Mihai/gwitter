const initialState = {
  checksId: [],
};
const subscribes = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHECK_ID": {
      return {
        ...state,
        checksId: [...state.checksId, action.payload],
      };
    }
    case "REMOVE_CHECK_ID": {
      const newArr = state.checksId.filter((item) => item !== action.payload);
      return {
        ...state,
        checksId: newArr,
      };
    }
    default:
      return state;
  }
};

export default subscribes;
