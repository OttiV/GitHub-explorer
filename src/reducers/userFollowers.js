import {
  FETCH_USER_FOLLOWERS_REQUEST,
  FETCH_USER_FOLLOWERS_SUCCESS,
  FETCH_USER_FOLLOWERS_FAILURE
} from "../actions/userFollowers";

const initialState = {
  loading: false,
  value: [],
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_FOLLOWERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        loading: false,
        value: payload,
        error: ""
      };
    case FETCH_USER_FOLLOWERS_FAILURE:
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
