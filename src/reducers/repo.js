import { SET_REPO } from "../actions/repos";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_REPO:
      return payload;

    default:
      return state;
  }
};
