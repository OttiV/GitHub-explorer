import React from "react";
import { Link } from "react-router-dom";
import "./RepoDetails.css";

const RepoDetails = ({ repo, time }) => {
  return (
    <div className="repoDetailsContainer">
      <div className="top">
        <div className="backButton">
          <Link to="/" className="backLink">
            Back
          </Link>
        </div>
        <div className="timeToLoad">Time to load: {time}ms</div>
      </div>
      <div className="repoDetailsWrapper">
        {repo.map(rep => {
          const { id, owner, name, description, fork, html_url } = rep;
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
              <div className="info">Fork: {fork ? "yup" : "nope"}</div>
              <div className="info">
                <a href={html_url} target="blank" rel="noreferrer noopener">
                  Click here to inspect {name} yourself
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepoDetails;
