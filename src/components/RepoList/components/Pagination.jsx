import React from "react";
import "./Pagination.css";

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <div key={number} className="button" onClick={() => paginate(number)}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
