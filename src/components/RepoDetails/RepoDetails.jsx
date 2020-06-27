import React, { useEffect, useState } from "react";
import "./RepoDetails.css";

const RepoDetails = ({ match }) => {
  const [repos, setRepos] = useState("");
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
  }, []);
  const repoName = match.params.name;

  const filteredRepo = repos && repos.filter(repo => repo.name === repoName);
  const repo = filteredRepo[0];
  console.log(repo && repo);
  return (
    <>
      {error || !repo ? (
        <div>{error}</div>
      ) : (
        <div className="repoDetailsContainer">
          <div className="info">User: {repo.owner.login}</div>
          <img
            src={repo.owner.avatar_url}
            alt={`${repo.owner.login} avatar`}
            className="avatar"
          />
          <div className="info">Repo: {repo.name}</div>
          <div className="info">Description: {repo.description}</div>
          <div className="info">Fork: {repo.fork ? repo.fork : "nope"}</div>
          <div className="info">Time to load: {time}ms</div>
        </div>
      )}
    </>
  );
};

export default RepoDetails;
