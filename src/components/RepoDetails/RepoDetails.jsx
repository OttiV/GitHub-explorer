import React, { useEffect, useState } from "react";
import "./RepoDetails.css";
import { baseUrl } from "../../constants";

const RepoDetails = ({ match }) => {
  const [repo, setRepo] = useState([]);
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const startTime = new Date().getTime();
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        if (data.mesage) {
          setError(data.mesage);
        } else {
          setRepo(data.filter(repo => repo.id === parseInt(match.params.name)));
        }
      });
    const endTime = new Date().getTime();
    const time = endTime - startTime;
    setTime(time);
  }, []);
  return (
    <>
      {error || !repo ? (
        <div>{error}</div>
      ) : (
        <div className="repoDetailsContainer">
          {repo.map(repo => {
            const { id, owner, name, description, fork } = repo;
            const { login, avatar_url } = owner;
            return (
              <div key={id} className="repoDetails">
                <div className="info">User: {login}</div>
                <img
                  src={avatar_url}
                  alt={`${login} avatar`}
                  className="avatar"
                />
                <div className="info">Repo: {name}</div>
                <div className="info">Description: {description}</div>
                <div className="info">Fork: {fork ? fork : "nope"}</div>
              </div>
            );
          })}
          <div className="info">Time to load: {time}ms</div>
        </div>
      )}
    </>
  );
};

export default RepoDetails;
