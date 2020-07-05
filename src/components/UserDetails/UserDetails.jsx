import React from "react";
import { BackLinkAndTime } from "../BackLinkAndTime";
import { UserInfo } from "./components";
import "./UserDetails.css";

const UserDetails = ({ user, resetUser, time }) => {
  return (
    <div className="userDetailsContainer">
      <BackLinkAndTime
        time={time}
        link="users"
        timeDataCy="timeToLoadUser"
        text="Users"
        resetElement={resetUser}
      />

      <div className="userDetailsWrapper" data-cy="userDetailsWrapper">
        {user.map(usr => {
          const {
            id,
            login,
            avatar_url,
            repos_url,
            following_url,
            followers_url
          } = usr;
          const followingUrl = following_url.split("{")[0];
          return (
            <div key={id} className="userDetails" data-cy={`userDetails-${id}`}>
              <div className="info" data-cy="userName">
                <img
                  src={avatar_url}
                  alt={`${login} avatar`}
                  className="avatar"
                  data-cy="userAvatar"
                />
                <span className="name">{login.toUpperCase()}</span>
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
};

export default UserDetails;
