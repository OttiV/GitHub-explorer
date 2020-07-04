import React from "react";
import "./Pagination.css";

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination" data-cy="pagination">
      <div className="buttonWrapper">
        {pageNumbers.map(number => (
          <div
            key={number}
            className="button"
            data-cy="paginationButton"
            onClick={() => paginate(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
