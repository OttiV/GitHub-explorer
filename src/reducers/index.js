import { combineReducers } from "redux";
import location from "./location";
import pagination from "./pagination";
import repo from "./repo";
import repos from "./repos";
import search from "./search";
import time from "./time";
import user from "./user";
import users from "./users";
import userFollowers from "./userFollowers";
import userFollowing from "./userFollowing";
import userRepos from "./userRepos";

export default combineReducers({
  location,
  pagination,
  repo,
  repos,
  search,
  time,
  user,
  users,
  userFollowers,
  userFollowing,
  userRepos
});
