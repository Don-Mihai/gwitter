import { combineReducers } from "redux";
import user from "./user";
import posts from "./posts";

const rootReducer = combineReducers({
  user,
  posts,
});

export default rootReducer;
