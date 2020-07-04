import request from "superagent";

export const FETCH_LATITUDE = "FETCH_LATITUDE";
export const FETCH_LONGITUDE = "FETCH_LONGITUDE";
export const FETCH_TIME = "FETCH_TIME";

const fetchLatitude = latitude => ({
  type: FETCH_LATITUDE,
  payload: latitude
});

const fetchLongitude = longitude => ({
  type: FETCH_LONGITUDE,
  payload: longitude
});

export const getCoords = () => {
  return function(dispatch) {
    function success(position) {
      const { latitude, longitude } = position.coords;
      dispatch(fetchLatitude(latitude));
      dispatch(fetchLongitude(longitude));
    }
    function failure(error) {
      console.warn(`ERROR(${error.code}): ${error.message}`);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failure);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };
};

const fetchUserLocalTime = time => ({
  type: FETCH_TIME,
  payload: time
});

export const getTimeFromCoords = (latitude, longitude) => {
  return function(dispatch) {
    request(
      `http://api.geonames.org/timezoneJSON?lat=${latitude}&lng=${longitude}&username=ovignani`
    )
      .then(response => {
        dispatch(fetchUserLocalTime(response.body.time));
      })
      .catch(error => {
        alert(error.message);
      });
  };
};
