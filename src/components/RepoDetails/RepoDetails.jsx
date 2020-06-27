import React, { useEffect, useState } from "react";

const RepoDetails = ({ match }) => {
  const [repos, setRepos] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/repositories")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
      });
  }, []);
  const repoName = match.params.name;

  const filteredRepo = repos && repos.filter(repo => repo.name === repoName);
  const repo = filteredRepo[0];

  return (
    <>
      {repo && (
        <div>
          <div>User: {repo.owner.login}</div>
          <img src={repo.avatar_url} alt={`${repo.owner.login} avatar`} />
          <div>Repo: {repo.name}</div>
          <div>Fork: {repo.fork ? "yes" : "nope"}</div>
        </div>
      )}
    </>
  );
};

export default RepoDetails;
