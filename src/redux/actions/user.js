import axios from "axios";

export const fetchCurUser = (login) => (dispatch) => {
  axios
    .get(`/users?login=${login ? login : sessionStorage.getItem("curLogin")}`)
    .then((data) => {
      dispatch(getCurUser(...data.data));
    });
};

export const fetchAllUsers = () => (dispatch) => {
  axios.get(`/Users`).then((data) => {
    dispatch(getAllUsers(data?.data));
  });
};

export const getCurUser = (user) => ({
  type: "GET_CUR_USER",
  payload: user,
});

export const getAllUsers = (users) => ({
  type: "GET_ALL_USERS",
  payload: users,
});
