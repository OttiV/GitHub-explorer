import request from "superagent";

export const LATITUDE_FETCHED = "LATITUDE_FETCHED";
export const LONGITUDE_FETCHED = "LONGITUDE_FETCHED";
export const TIME_FETCHED = "TIME_FETCHED";

const latitudeFetched = latitude => ({
  type: LATITUDE_FETCHED,
  payload: latitude
});

const longitudeFetched = longitude => ({
  type: LONGITUDE_FETCHED,
  payload: longitude
});

export const getCoordinates = position => dispatch => {
  const { latitude, longitude } = position.coords;
  dispatch(latitudeFetched(latitude));
  dispatch(longitudeFetched(longitude));
};

const timeFetched = time => ({
  type: TIME_FETCHED,
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
      dispatch(timeFetched(response.body.time));
    })
    .catch(console.error);
};
