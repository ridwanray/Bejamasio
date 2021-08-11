import React, { useState } from "react";
import arrowLeft from "../images/Vector 1 (1).png";
import arrowRight from "../images/Vector 2 (1).png";

export default function Pagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
}) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {/* show the products, 6 products at a time */}
      <React.Fragment>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </React.Fragment>

      {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 4 page
              numbers at a time
          */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          style={{ display: `${currentPage === 1 ? "none" : ""}` }}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          <span>
            <img
            width='10' height='10'
             src={arrowLeft} alt="back-arrow" />
          </span>
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          style={{
            display: `${
              currentPage === pages || currentPage > pages ? "none" : ""
            }`,
          }}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          <span>
            <img width='10' height='10' src={arrowRight} alt="next-arrow" />
          </span>
        </button>
      </div>
    </>
  );
}
