import axios from "axios";

const initialState = {
  posts: [],
  pinPosts: [],
};
const posts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "DELETE_POST": {
      const filteredPosts = state.posts.filter(
        (item) => item.id !== action.payload
      );
      axios.delete(`http://localhost:3001/posts/${action.payload}`).catch();
      return {
        ...state,
        posts: filteredPosts,
      };
    }
    case "PIN_POST": {
      const isExist = state.pinPosts.filter(
        (item) => item.id === action.payload
      );
      if (isExist.length) {
        return state;
      }
      const pinedPost = state.posts.filter(
        (item) => item.id === action.payload
      );
      axios.post(`http://localhost:3001/pinedPosts`, ...pinedPost).catch();
      return {
        ...state,
        pinPosts: [...state.pinPosts, ...pinedPost],
      };
    }
    case "GET_ALL_PIN_POSTS": {
      return {
        ...state,
        pinPosts: action.payload,
      };
    }
    case "DELETE_PIN_POST": {
      const deletedPinPosts = state.pinPosts.filter(
        (item) => item.id !== action.payload
      );
      axios
        .delete(`http://localhost:3001/pinedPosts/${action.payload}`)
        .catch();
      return {
        ...state,
        pinPosts: deletedPinPosts,
      };
    }
    default:
      return state;
  }
};

export default posts;
