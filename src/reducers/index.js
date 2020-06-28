import { combineReducers } from "redux";
import location from "./location";
import pagination from "./pagination";
import repo from "./repo";
import repos from "./repos";
import search from "./search";
import time from "./time";

export default combineReducers({
  location,
  pagination,
  repo,
  repos,
  search,
  time
});
