import { SET_SEARCH } from "../actions/search";

const initialState = {
  value: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        value: payload
      };

    default:
      return state;
  }
};
