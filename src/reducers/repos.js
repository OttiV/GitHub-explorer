import { REPOS_FETCHED } from "../actions/repos";

export default (state = [], { type, payload }) => {
  switch (type) {
    case REPOS_FETCHED:
      return payload.reduce((repos, repo) => {
        repos[repo.id] = repo;
        return repos;
      }, {});

    default:
      return state;
  }
};
