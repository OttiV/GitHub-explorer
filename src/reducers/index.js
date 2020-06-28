import { combineReducers } from "redux";
import location from "./location";
import repo from "./repo";
import repos from "./repos";
import search from "./search";
import time from "./time";

export default combineReducers({
  location,
  repo,
  repos,
  search,
  time
});
