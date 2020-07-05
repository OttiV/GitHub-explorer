import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILURE
} from "../actions/repos";
import {
  FETCH_CONTENTS_REQUEST,
  FETCH_CONTENTS_SUCCESS,
  FETCH_CONTENTS_FAILURE
} from "../actions/repoContents";
import {
  FETCH_ASSIGNEES_REQUEST,
  FETCH_ASSIGNEES_SUCCESS,
  FETCH_ASSIGNEES_FAILURE
} from "../actions/repoAssignees";

const initialState = {
  loading: false,
  value: [],
  error: "",
  contents: {
    loading: false,
    value: [],
    error: ""
  },
  assignees: {
    loading: false,
    value: [],
    error: ""
  }
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
    case FETCH_CONTENTS_REQUEST:
      return {
        ...state,
        contents: {
          loading: true,
          ...state
        }
      };
    case FETCH_CONTENTS_SUCCESS:
      return {
        ...state,
        contents: { loading: false, value: payload, error: "" }
      };
    case FETCH_CONTENTS_FAILURE:
      return {
        ...state,
        contents: { loading: false, value: [], error: payload }
      };
    case FETCH_ASSIGNEES_REQUEST:
      return {
        ...state,
        assignees: {
          loading: true,
          ...state
        }
      };
    case FETCH_ASSIGNEES_SUCCESS:
      return {
        ...state,
        assignees: { loading: false, value: payload, error: "" }
      };
    case FETCH_ASSIGNEES_FAILURE:
      return {
        ...state,
        assignees: { loading: false, value: [], error: payload }
      };
    default:
      return state;
  }
};
