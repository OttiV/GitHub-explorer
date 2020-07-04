import React from "react";
import { Link } from "react-router-dom";
import "./RepoDetails.css";
import { Spinner } from "../Spinner";

const RepoDetails = ({ repo, resetRepo, time }) => {
  const timeText = time ? `${time}ms` : <Spinner small={true} />;
  return (
    <div className="repoDetailsContainer">
      <div className="top">
        <div className="backButton">
          <Link
            to="/"
            className="backLink"
            data-cy="backButton"
            onClick={() => resetRepo([])}
          >
            Back
          </Link>
        </div>
        <div className="timeToLoad" data-cy="timeToLoadRepo">
          Time to load: {timeText}
        </div>
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
                  Click here to inspect <strong>{name}</strong> yourself
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
