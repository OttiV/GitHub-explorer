import { SET_REPO_TIME, SET_REPOS_TIME } from "../actions/repos";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case SET_REPO_TIME:
      return payload;
    case SET_REPOS_TIME:
      return payload;

    default:
      return state;
  }
};
