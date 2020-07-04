import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILURE
} from "../actions/repos";

const initialState = {
  loading: false,
  value: [],
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REPO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_REPO_SUCCESS:
      return {
        ...state,
        loading: false,
        value: payload,
        error: ""
      };
    case FETCH_REPO_FAILURE:
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
