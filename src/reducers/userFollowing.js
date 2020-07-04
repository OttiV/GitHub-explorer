import {
  FETCH_USER_FOLLOWING_REQUEST,
  FETCH_USER_FOLLOWING_SUCCESS,
  FETCH_USER_FOLLOWING_FAILURE
} from "../actions/userFollowing";

const initialState = {
  loading: false,
  value: [],
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_FOLLOWING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_FOLLOWING_SUCCESS:
      return {
        ...state,
        loading: false,
        value: payload,
        error: ""
      };
    case FETCH_USER_FOLLOWING_FAILURE:
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
