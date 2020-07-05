import { SET_REPO_TIME, SET_REPOS_TIME } from "../actions/repos";
import { SET_USERS_TIME, SET_USER_TIME } from "../actions/usersActions";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case SET_REPO_TIME:
      return payload;
    case SET_REPOS_TIME:
      return payload;
    case SET_USERS_TIME:
      return payload;
    case SET_USER_TIME:
      return payload;

    default:
      return state;
  }
};
