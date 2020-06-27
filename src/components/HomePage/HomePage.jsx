import React, { lazy, Suspense, useEffect, useState } from "react";
import { SearchBox } from "./components";
import "./HomePage.css";
const ReposList = lazy(() => import("./components/ReposList"));

function HomePage() {
  const [repos, setRepos] = useState("");
  const [search, setSearch] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const startTime = new Date().getTime();
    fetch("https://api.github.com/repositories")
      .then(res => res.json())
      .then(data => {
        if (data.mesage) {
          setError(data.mesage);
        } else {
          setRepos(data);
        }
      });
    const endTime = new Date().getTime();
    const time = endTime - startTime;
    setTime(time);
    setSearch("");
  }, []);
  const handleInput = event => {
    setSearch(event.target.value);
  };
  const filteredRepos =
    repos &&
    repos.filter(repo =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <SearchBox search={search} handleInput={handleInput} time={time} />
      <Suspense fallback={<div>Loading...</div>}>
        <ReposList repos={filteredRepos} error={error} />
      </Suspense>
    </div>
  );
}

export default HomePage;
