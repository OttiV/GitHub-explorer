import {
    FETCH_USER_REPOS_REQUEST,
    FETCH_USER_REPOS_SUCCESS,
    FETCH_USER_REPOS_FAILURE
  } from "../actions/userRepos";
  
  const initialState = {
    loading: false,
    value: [],
    error: ""
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case FETCH_USER_REPOS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_USER_REPOS_SUCCESS:
        return {
          ...state,
          loading: false,
          value: payload,
          error: ""
        };
      case FETCH_USER_REPOS_FAILURE:
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