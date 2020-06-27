import React, { lazy, Suspense, useEffect, useState } from "react";
import { SearchBox, Pagination } from "./components";
import "./HomePage.css";
const ReposList = lazy(() => import("./components/ReposList"));

function HomePage() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);
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
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const filteredRepos =
    repos &&
    currentRepos.filter(repo =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <SearchBox search={search} handleInput={handleInput} time={time} />
      <Suspense fallback={<div>Loading...</div>}>
        <ReposList repos={filteredRepos} error={error} />
        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={repos.length}
          paginate={paginate}
        />
      </Suspense>
    </div>
  );
}

export default HomePage;
