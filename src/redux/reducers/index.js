import { combineReducers } from "redux";
import user from "./user";
import posts from "./posts";
import search from "./search";
import subscribes from "./subscribes";

const rootReducer = combineReducers({
  user,
  posts,
  search,
  subscribes,
});

export default rootReducer;
