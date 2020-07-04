import React from "react";
import { Link } from "react-router-dom";
import "./UserDetails.css";
import { Spinner } from "../Spinner";

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
          return (
            <div key={id} className="userDetails" data-cy={`userDetails-${id}`}>
              <div className="info" data-cy="userName">
                User: {login}
              </div>
              <img
                src={avatar_url}
                alt={`${login} avatar`}
                className="avatar"
                data-cy="userAvatar"
              />
              <div className="info" data-cy="reposUrl">
                Repos: {repos_url}
              </div>
              <div className="info" data-cy="following">
                Following: {following_url}
              </div>
              <div className="info" data-cy="follower">
                Followers: {followers_url}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
