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

export const getLocation = () => {
  // function getCoordinates(position) {
  //   const { latitude, longitude } = position.coords;
  //   dispatch(latitudeFetched(latitude));
  //   dispatch(longitudeFetched(longitude));
  // }
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(getCoordinates);
  } else {
    alert("Geolocation is not supported by this browser");
  }
};

const timeFetched = time => ({
  type: TIME_FETCHED,
  payload: time
});

export const getTimeFromCoordinates = (latitude, longitude) => dispatch => {
  // const startTime = getTime();
  request(
    `http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=ovignani`
  )
    .then(response => {
      console.log("time", response.body.time);
      dispatch(timeFetched(response.body.time));
      // const endTime = getTime();
      // const time = endTime - startTime;
      // dispatch(reposFetchedTime(time));
    })
    .catch(console.error);
};
