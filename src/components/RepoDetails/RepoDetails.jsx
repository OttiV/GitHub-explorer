import React from "react";
import { Link } from "react-router-dom";
import "./RepoDetails.css";

const RepoDetails = ({ repo, time }) => {
  return (
    <div className="repoDetailsContainer">
      <div className="top">
        <div className="backButton">
          <Link to="/" className="backLink" data-cy="backButton">
            Back
          </Link>
        </div>
        <div className="timeToLoad" data-cy="timeToLoadRepo">Time to load: {time}ms</div>
      </div>
      <div className="repoDetailsWrapper" data-cy="repoDetailsWrapper">
        {repo.map(rep => {
          const { id, owner, name, description, fork, html_url } = rep;
          const { login, avatar_url } = owner;
          return (
            <div key={id} className="repoDetails" data-cy={`repoDetails-${id}`}>
              <div className="info" data-cy="userName">
                User: {login}
              </div>
              <img
                src={avatar_url}
                alt={`${login} avatar`}
                className="avatar"
                data-cy="userAvatar"
              />
              <div className="info" data-cy="repoTitle">
                Repo: {name}
              </div>
              <div className="info" data-cy="repoDescription">
                Description: {description}
              </div>
              <div className="info" data-cy="repoFork">
                Fork: {fork ? "yup" : "nope"}
              </div>
              <div className="info">
                <a
                  href={html_url}
                  target="blank"
                  rel="noreferrer noopener"
                  data-cy="repoLink"
                >
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
