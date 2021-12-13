const initialState = {
  curUser: {},
  users: [],
  isLoaded: false,
  isLoadedUsers: false,
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CUR_USER": {
      return {
        ...state,
        curUser: action.payload,
        isLoaded: true,
      };
    }
    case "GET_ALL_USERS": {
      return {
        ...state,
        users: action.payload,
        isLoadedUsers: true,
      };
    }
    default:
      return state;
  }
};

export default user;
