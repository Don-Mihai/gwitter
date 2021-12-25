import axios from "axios";

export const fetchAllPosts = () => (dispatch) => {
  axios.get(`/posts`).then((data) => dispatch(getPosts(data?.data)));
};

export const getPosts = (posts) => ({
  type: "GET_POSTS",
  payload: posts,
});

export const deletePost = (id) => ({
  type: "DELETE_POST",
  payload: id,
});

export const pinPost = (id) => ({
  type: "PIN_POST",
  payload: id,
});

export const getAllPinPosts = (posts) => ({
  type: "GET_ALL_PIN_POSTS",
  payload: posts,
});

export const deletePinPost = (id) => ({
  type: "DELETE_PIN_POST",
  payload: id,
});
