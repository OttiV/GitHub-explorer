import { REPO_FETCHED } from "../actions/repos";

export default (state = [], { type, payload }) => {
  switch (type) {
    case REPO_FETCHED:
      return payload;

    default:
      return state;
  }
};
