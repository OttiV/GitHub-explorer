import React from "react";
import { BackLinkAndTime } from "../BackLinkAndTime";
import { UserInfo } from "../UserDetails/components";
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
        const { id, owner, name, description, html_url } = rep;
        const {
          login,
          avatar_url,
          repos_url,
          following_url,
          followers_url
        } = owner;
        const followingUrl = following_url.split("{")[0];
        return (
          <div key={id} className="repoDetails" data-cy={`repoDetails-${id}`}>
            <div className="nameAndAvatar">
              <img
                src={avatar_url}
                alt={`${login} avatar`}
                className="avatar"
                data-cy="userAvatar"
              />
              <span data-cy="userName" className="name">
                {login.toUpperCase()}
              </span>
            </div>
            <div className="info" data-cy="repoTitle">
              Repo:
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
            <UserInfo url={repos_url} category="repos" />
            <UserInfo url={followingUrl} category="following" />
            <UserInfo url={followers_url} category="followers" />
          </div>
        );
      })}
    </div>
  </div>
);

export default RepoDetails;
