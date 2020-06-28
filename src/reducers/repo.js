import { REPO_FETCHED } from "../actions/repos";

export default (state = null, { type, payload }) => {
  switch (type) {
    case REPO_FETCHED:
      return payload;

    // case REPO_UPDATE_SUCCESS:
    //   if (state.id === payload.id) {
    //     return payload;
    //   }

    //   return state;

    default:
      return state;
  }
};
