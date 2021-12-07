const initialState = {
  posts: [],
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        posts: action.payload.length === 0 ? [] : [action.payload],
      };
    }
    default:
      return state;
  }
};

export default posts;
