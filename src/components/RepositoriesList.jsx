import React from "react";

const RepositoriesList = ({ repos }) => {
  return (
    <>
      {!repos ? (
        <div>loading...</div>
      ) : (
        <div>
          {repos.map(repo => {
            return <div key={repo.id}>{repo.name}</div>;
          })}
        </div>
      )}
    </>
  );
};

export default RepositoriesList;
