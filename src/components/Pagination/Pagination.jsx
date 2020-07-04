import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  elementsPerPage,
  paginate,
  totalElements
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination" data-cy="pagination">
      <div className="buttonWrapper">
        {pageNumbers.map(number => (
          <div
            key={number}
            className={`button ${currentPage === number && "currentPage"}`}
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
