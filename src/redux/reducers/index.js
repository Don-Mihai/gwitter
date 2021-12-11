import { combineReducers } from "redux";
import user from "./user";
import posts from "./posts";
import search from "./search";
import category from "./category";

const rootReducer = combineReducers({
  user,
  posts,
  search,
  category,
});

export default rootReducer;
