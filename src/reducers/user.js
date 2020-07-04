import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../actions/users";

const initialState = {
  loading: false,
  value: [],
  error: ""
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
    default:
      return state;
  }
};
