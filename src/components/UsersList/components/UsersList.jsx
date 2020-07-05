import React from "react";
import { Link } from "react-router-dom";
import "./UsersList.css";

const UsersList = ({ users, loading }) => {
  const userHasLength = users.length > 0;
  const userListClass = userHasLength ? "usersList" : "";
  return (
    <div className="userListWrapper">
      {!userHasLength && !loading && (
        <div className="noMatch">Sorry, no matches found</div>
      )}
      <div className={userListClass} data-cy="usersList">
        {users.map(user => {
          const { login, id } = user;

          return (
            <Link
              key={id}
              to={`/users/${login}`}
              className="userLine"
              data-cy="userLine"
            >
              {login}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UsersList;
