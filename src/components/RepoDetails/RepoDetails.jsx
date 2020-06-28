import React from "react";
import "./RepoDetails.css";

const RepoDetails = ({ repo, time }) => {
  return (
    <div className="repoDetailsContainer">
      {repo.map(rep => {
        const { id, owner, name, description, fork } = rep;
        const { login, avatar_url } = owner;
        return (
          <div key={id} className="repoDetails">
            <div className="info">User: {login}</div>
            <img src={avatar_url} alt={`${login} avatar`} className="avatar" />
            <div className="info">Repo: {name}</div>
            <div className="info">Description: {description}</div>
            <div className="info">Fork: {fork ? "yup" : "nope"}</div>
          </div>
        );
      })}
      <div className="info">Time to load: {time}ms</div>
    </div>
  );
};

export default RepoDetails;
