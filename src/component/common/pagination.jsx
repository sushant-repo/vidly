import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  //use lodash package to create array of pagenumbers
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //need an array of page number to render

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
