import React from "react";
import { Link } from "react-router-dom";
import "./ReposList.css";

const ReposList = ({ repos, loading }) => {
  const repoHasLength = repos.length > 0;
  const repoListClass = repoHasLength ? "reposList" : "";
  return (
    <div className="repoListWrapper">
      {!repoHasLength && !loading && (
        <div className="noMatch">Sorry, no matches found</div>
      )}
      <div className={repoListClass} data-cy="reposList">
        {repos.map(repo => {
          const { name, id, owner } = repo;
          const { login } = owner;

          return (
            <Link
              key={id}
              to={`/repos/${login}/${name}`}
              className="repoLine"
              data-cy="repoLine"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ReposList;
