import { SET_PAGINATION } from "../actions/pagination";

export default (state = 1, { type, payload }) => {
  switch (type) {
    case SET_PAGINATION:
      return payload;

    default:
      return state;
  }
};
