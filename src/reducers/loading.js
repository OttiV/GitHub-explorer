import { SET_LOADING } from "../actions/repos";

export default (state = true, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return payload;

    default:
      return state;
  }
};
