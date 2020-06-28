import { LATITUDE_FETCHED, LONGITUDE_FETCHED } from "../actions/location";

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
    default:
      return state;
  }
};
