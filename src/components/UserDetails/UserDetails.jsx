import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner";
import { UserInfo } from "./components";
import "./UserDetails.css";

const UserDetails = ({ user, resetUser, time }) => {
  const timeText = time ? `${time}ms` : <Spinner small={true} />;
  return (
    <div className="userDetailsContainer">
      <div className="top">
        <div className="backButton">
          <Link
            to="/users"
            className="backLink"
            data-cy="backButton"
            onClick={() => resetUser([])}
          >
            Back
          </Link>
        </div>
        <div className="timeToLoad" data-cy="timeToLoadUser">
          Time to load: {timeText}
        </div>
      </div>
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
              <UserInfo url={repos_url} detail="repos" />
              <UserInfo url={followingUrl} detail="following" />
              <UserInfo url={followers_url} detail="followers" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
