import { SET_LATITUDE, SET_LONGITUDE, SET_TIME } from "../actions/location";
const initialState = {
  latitude: "",
  longitude: "",
  time: ""
};
export default (state = initialState, { type, payload }) => {
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
