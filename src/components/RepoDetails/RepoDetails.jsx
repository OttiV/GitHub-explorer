import React from "react";
import { BackLinkAndTime } from "../BackLinkAndTime";
import "./RepoDetails.css";

const RepoDetails = ({ repo, resetRepo, time }) => (
  <div className="repoDetailsContainer">
    <BackLinkAndTime
      time={time}
      link="repos"
      timeDataCy="timeToLoadRepo"
      text="Repos"
      resetElement={resetRepo}
    />
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

export default RepoDetails;
