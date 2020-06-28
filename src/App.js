import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, HomePage } from "./components";
// import { GOOGLE_MAP_KEY } from "./config";
const RepoDetails = lazy(() => import("./components/RepoDetails/RepoDetails"));

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const getCoordinates = position => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };
  // Invesigate Google maps API
  // const reverseGeocodingWithGoogle = (latitude, longitude) => {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json? latlng=${latitude},${longitude}&key=${GOOGLE_MAP_KEY}`
  //   )
  //     .then(res => res.json())
  //     .then(response => {
  //       console.log("User's Location Info: ", response);
  //     })
  //     .catch(status => {
  //       console.log("Request failed. Returned status of", status);
  //     });
  // };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Header
          latitude={latitude}
          longitude={longitude}
          getLocation={getLocation}
        />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:name" component={RepoDetails} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
