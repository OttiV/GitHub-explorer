import { combineReducers } from "redux";
import location from "./location";
import pagination from "./pagination";
import repo from "./repo";
import repos from "./repos";
import search from "./search";
import time from "./time";
import user from "./user";
import users from "./users";

export default combineReducers({
  location,
  pagination,
  repo,
  repos,
  search,
  time,
  user,
  users
});
