import {
  LATITUDE_FETCHED,
  LONGITUDE_FETCHED,
  TIME_FETCHED
} from "../actions/location";

export default (state = [], { type, payload }) => {
  switch (type) {
    case LATITUDE_FETCHED:
      return {
        ...state,
        latitude: payload
      };
    case LONGITUDE_FETCHED:
      return {
        ...state,
        longitude: payload
      };
    case TIME_FETCHED:
      return {
        ...state,
        time: payload
      };
    default:
      return state;
  }
};
