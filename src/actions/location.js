export const LATITUDE_FETCHED = "LATITUDE_FETCHED";
export const LONGITUDE_FETCHED = "LONGITUDE_FETCHED";

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
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoordinates);
  } else {
    alert("Geolocation is not supported by this browser");
  }
};
