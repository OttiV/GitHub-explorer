import { SET_LATITUDE, SET_LONGITUDE, SET_TIME } from "../actions/location";

export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_LATITUDE:
      return {
        ...state,
        latitude: payload
      };
    case SET_LONGITUDE:
      return {
        ...state,
        longitude: payload
      };
    case SET_TIME:
      return {
        ...state,
        time: payload
      };
    default:
      return state;
  }
};
