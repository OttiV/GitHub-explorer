import { combineReducers } from "redux";
import loading from "./loading";
import location from "./location";
import pagination from "./pagination";
import repo from "./repo";
import repos from "./repos";
import search from "./search";
import time from "./time";

export default combineReducers({
  loading,
  location,
  pagination,
  repo,
  repos,
  search,
  time
});
