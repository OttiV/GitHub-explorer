import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE
} from "../actions/reposActions";

const initialState = {
  loading: false,
  value: [],
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        value: payload,
        error: ""
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        value: [],
        error: payload
      };
    default:
      return state;
  }
};
