import request from "superagent";

export const SET_LATITUDE = "SET_LATITUDE";
export const SET_LONGITUDE = "SET_LONGITUDE";
export const SET_TIME = "SET_TIME";

const setLatitude = latitude => ({
  type: SET_LATITUDE,
  payload: latitude
});

const setLongitude = longitude => ({
  type: SET_LONGITUDE,
  payload: longitude
});

export const getCoordinates = position => dispatch => {
  const { latitude, longitude } = position.coords;
  dispatch(setLatitude(latitude));
  dispatch(setLongitude(longitude));
};

const setTime = time => ({
  type: SET_TIME,
  payload: time
});

export const getTimeFromCoordinates = (latitude, longitude) => dispatch => {
  request(
    `http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=ovignani`
  )
    .then(response => {
      if (response.body.message) {
        return alert("Oops " + JSON.stringify(response.body.message));
      }
      dispatch(setTime(response.body.time));
    })
    .catch(console.error);
};
