import React from "react";
import { BackLinkAndTime } from "../BackLinkAndTime";
import { RepoInfo } from "./components";
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
        const {
          id,
          owner,
          name,
          description,
          html_url,
          assignees_url,
          contents_url
        } = rep;
        const { login, avatar_url } = owner;
        const contentsSplitUrl = contents_url.split("{+path}");
        const contentsUrl = contentsSplitUrl[0];
        const assigneesSplitUrl = assignees_url.split("{/user}");
        const assigneesUrl = assigneesSplitUrl[0];

        return (
          <div key={id} className="repoDetails" data-cy={`repoDetails-${id}`}>
            <div className="title" data-cy="repoTitle">
              <a
                href={html_url}
                target="blank"
                rel="noreferrer noopener"
                data-cy="repoLink"
                className="repoLink"
              >
                {name.toUpperCase()}
              </a>
            </div>
            <div className="nameAndAvatar">
              <img
                src={avatar_url}
                alt={`${login} avatar`}
                className="avatar"
                data-cy="userAvatar"
              />
              <span data-cy="userName" className="name">
                by {login}
              </span>
            </div>
            <div className="info" data-cy="repoDescription">
              Description: {description}
            </div>
            <RepoInfo url={contentsUrl} category="contents" />
            <RepoInfo url={assigneesUrl} category="assignees" />
          </div>
        );
      })}
    </div>
  </div>
);

export default RepoDetails;
