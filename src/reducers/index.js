import { combineReducers } from "redux";
import repo from "./repo";
import repos from "./repos";
import search from "./search";

export default combineReducers({
  search,
  repo,
  repos
});
