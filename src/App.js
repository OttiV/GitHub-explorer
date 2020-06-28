import React, { lazy, Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { HeaderContainer as Header } from "./components";
// import { GOOGLE_MAP_KEY } from "./config";
const RepoDetails = lazy(() =>
  import("./components/RepoDetails/RepoDetailsContainer")
);
const ReposList = lazy(() =>
  import("./components/RepoList/ReposListContainer")
);

function App() {
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
      <Header />
      <Switch>
        <Route path="/" exact component={ReposList} />
        <Route path="/:name" component={RepoDetails} />
      </Switch>
    </Suspense>
  );
}

export default App;
