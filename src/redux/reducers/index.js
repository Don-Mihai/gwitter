import { combineReducers } from "redux";
import user from "./user";
import posts from "./posts";
import search from "./search";

const rootReducer = combineReducers({
  user,
  posts,
  search,
});

export default rootReducer;
