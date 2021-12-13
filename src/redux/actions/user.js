export const getCurUser = (user) => ({
  type: "GET_CUR_USER",
  payload: user,
});

export const getAllUsers = (users) => ({
  type: "GET_ALL_USERS",
  payload: users,
});
