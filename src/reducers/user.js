import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_FOLLOWERS_REQUEST,
  FETCH_FOLLOWERS_SUCCESS,
  FETCH_FOLLOWERS_FAILURE,
  FETCH_FOLLOWING_REQUEST,
  FETCH_FOLLOWING_SUCCESS,
  FETCH_FOLLOWING_FAILURE,
  FETCH_USER_REPOS_REQUEST,
  FETCH_USER_REPOS_SUCCESS,
  FETCH_USER_REPOS_FAILURE
} from "../actions/usersActions";

const initialState = {
  loading: false,
  value: [],
  error: "",
  followers: {
    loading: false,
    value: [],
    error: ""
  },
  following: {
    loading: false,
    value: [],
    error: ""
  },
  repos: {
    loading: false,
    value: [],
    error: ""
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        value: payload,
        error: ""
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        value: [],
        error: payload
      };

    case FETCH_FOLLOWERS_REQUEST:
      return {
        ...state,
        followers: {
          ...state,
          loading: true
        }
      };
    case FETCH_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: {
          loading: false,
          value: payload,
          error: ""
        }
      };
    case FETCH_FOLLOWERS_FAILURE:
      return {
        ...state,
        followers: { loading: false, value: [], error: payload }
      };
    case FETCH_FOLLOWING_REQUEST:
      return {
        ...state,
        following: {
          ...state,
          loading: true
        }
      };
    case FETCH_FOLLOWING_SUCCESS:
      return {
        ...state,
        following: {
          loading: false,
          value: payload,
          error: ""
        }
      };
    case FETCH_FOLLOWING_FAILURE:
      return {
        ...state,
        following: { loading: false, value: [], error: payload }
      };
    case FETCH_USER_REPOS_REQUEST:
      return {
        ...state,
        repos: {
          ...state,
          loading: true
        }
      };
    case FETCH_USER_REPOS_SUCCESS:
      return {
        ...state,
        repos: {
          loading: false,
          value: payload,
          error: ""
        }
      };
    case FETCH_USER_REPOS_FAILURE:
      return {
        ...state,
        repos: { loading: false, value: [], error: payload }
      };
    default:
      return state;
  }
};
