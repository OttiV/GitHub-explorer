import React, { useEffect, useState } from "react";
import { RepositoriesList, SearchBox } from "./components";
import "./App.css";

function App() {
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
    <div className="App">
      <header className="App-header">GitHub Explorer</header>
      <SearchBox search={search} handleInput={handleInput} />
      <RepositoriesList repos={filteredRepos} />
    </div>
  );
}

export default App;
