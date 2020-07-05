import React from "react";
import { BackLinkAndTime } from "../BackLinkAndTime";
import { Commits, Assignees, Readme } from "./components";
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
          contents_url,
          commits_url
        } = rep;
        const { login, avatar_url } = owner;
        const contentsUrl = contents_url.split("{+path}");
        const assigneesUrl = assignees_url.split("{/user}");
        const commitsUrl = commits_url.split("{/sha}");

        return (
          <div key={id} className="repoDetails" data-cy={`repoDetails-${id}`}>
            <div className="repoAndUserInfo">
              <div className="title" data-cy="repoTitle">
                {name.toUpperCase()}
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
            </div>
            <div className="repoInfoDetails">
              <div className="info" data-cy="repoDescription">
                Link:
                <a
                  href={html_url}
                  target="blank"
                  rel="noreferrer noopener"
                  data-cy="repoLink"
                  className="repoLink"
                >
                  {name}
                </a>
              </div>
              <div className="info" data-cy="repoDescription">
                Description: {description}
              </div>
              <Readme url={contentsUrl[0]} />
              <Assignees url={assigneesUrl[0]} />
              <Commits url={commitsUrl[0]} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default RepoDetails;
