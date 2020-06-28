import { combineReducers } from "redux";
import repo from "./repo";
import repos from "./repos";
import search from "./search";
import time from "./time";

export default combineReducers({
  repo,
  repos,
  search,
  time
});
