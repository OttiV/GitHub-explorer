import React from "react";
import { Link } from "react-router-dom";
import "./ReposList.css";

const ReposList = ({ repos, loading }) => {
  if (repos.length === 0 && !loading) {
    return <div className="noMatch">Sorry, no matches found</div>;
  }
  return (
    <div className="repoListWrapper">
      <div className="reposList" data-cy="reposList">
        {repos.map(repo => {
          const { name, id } = repo;

          return (
            <Link
              key={repo.id}
              to={`/repo/${id}`}
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
