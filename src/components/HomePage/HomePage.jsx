import React, { useEffect, useState } from "react";
import { ReposList, SearchBox } from "./components";
import "./HomePage.css";

function HomePage() {
  const [repos, setRepos] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/repositories")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setSearch("");
      });
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
      <SearchBox search={search} handleInput={handleInput} />
      <ReposList repos={filteredRepos} />
    </div>
  );
}

export default HomePage;
