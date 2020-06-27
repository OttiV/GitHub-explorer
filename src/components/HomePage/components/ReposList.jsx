import React from "react";
import { Link } from "react-router-dom";
import "./ReposList.css";

const ReposList = ({ repos }) => {
  console.log("repos", repos && repos.map(repo => repo.name));
  return (
    <>
      {!repos ? (
        <div>loading...</div>
      ) : (
        <div className="reposList">
          {repos.map(repo => {
            const { name } = repo;
            return (
              <Link key={repo.id} to={`/${name}`}>
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ReposList;
