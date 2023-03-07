import React, { useState } from "react";

function Pagination({ currentPage, setCurrentPage, itemsPerPage, totalPost }) {
  const pageNumbers = [];
  const [getPaginationNumber, setGetPaginationNumber] = useState(0);
  for (let i = 1; i <= Math.ceil(totalPost / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const goPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goNext = () => {
    if (currentPage * itemsPerPage >= totalPost) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="d-flex justify-content-end">
      <div aria-label="Page navigation example ">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => goPrevious()}
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {pageNumbers.map((number) =>
            number <= 5 ? (
              <a
                key={number}
                onClick={() => paginate(number + getPaginationNumber)}
                href="#"
                className={
                  currentPage === number + getPaginationNumber
                    ? " text-primary bg-light   hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white  border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                }
              >
                <li>{number + getPaginationNumber}</li>
              </a>
            ) : null
          )}

          <li className="page-item">
            <a
              className="page-link"
              onClick={() => goNext()}
              href="#"
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
