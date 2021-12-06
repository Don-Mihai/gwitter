import axios from "axios";

const initialState = {
  curUser: {},
  allDataUser: {},
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      axios
        .post("http://localhost:3001/users", action.payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      return {
        ...state,
        allDataUser: action.payload,
      };
    case "SET_CURRENT_USER":
      return {
        curUser: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        allDataUser: action.payload,
      };
    default:
      return state;
  }
};

export default user;
