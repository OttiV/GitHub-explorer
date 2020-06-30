import { SET_REPOS } from "../actions/repos";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_REPOS:
      return payload.reduce((repos, repo) => {
        repos[repo.id] = repo;
        return repos;
      }, {});

    default:
      return state;
  }
};
