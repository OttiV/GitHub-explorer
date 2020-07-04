import {
  FETCH_LATITUDE,
  FETCH_LONGITUDE,
  FETCH_TIME
} from "../actions/location";
const initialState = {
  latitude: "",
  longitude: "",
  time: ""
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LATITUDE:
      return {
        ...state,
        latitude: payload
      };
    case FETCH_LONGITUDE:
      return {
        ...state,
        longitude: payload
      };
    case FETCH_TIME:
      return {
        ...state,
        time: payload
      };
    default:
      return state;
  }
};
