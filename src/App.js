import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { HeaderContainer as Header } from "./components";
const RepoDetails = lazy(() =>
  import("./components/RepoDetails/RepoDetailsContainer")
);
const ReposList = lazy(() =>
  import("./components/RepoList/ReposListContainer")
);

function App() {
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
