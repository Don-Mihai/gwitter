export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const setCurUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const getUser = (data) => ({
  type: "GET_USER",
  payload: data,
});
