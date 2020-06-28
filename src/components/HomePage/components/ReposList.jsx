import React from "react";
import { Link } from "react-router-dom";
import "./ReposList.css";

const ReposList = ({ error, repos, time }) => (
  <>
    {error ? (
      <div>{error}</div>
    ) : (
      <>
        <div className="reposList">
          {repos &&
            repos.map(repo => {
              const { name, id } = repo;
              return (
                <Link key={repo.id} to={`/${id}`} className="repoLine">
                  {name}
                </Link>
              );
            })}
        </div>
      </>
    )}
  </>
);

export default ReposList;
