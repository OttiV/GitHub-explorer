import { REPO_FETCHED_TIME, REPOS_FETCHED_TIME } from "../actions/repos";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case REPO_FETCHED_TIME:
      return payload;
    case REPOS_FETCHED_TIME:
      return payload;

    default:
      return state;
  }
};
