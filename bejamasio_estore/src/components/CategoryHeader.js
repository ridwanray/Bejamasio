import React from "react";
import mobileCategoryIcon from "../images/Group 31.png"; // with import
function CategoryHeader() {
  return (
    <>
      <section className="container d-flex justify-content-between">
        <div>
          <strong>Photograph /</strong>
          &nbsp;
          <span className="text-muted">Premium Photos </span>
        </div>
        <div
          className="d-lg-none d-xl-block d-md-none d-lg-block
    	d-xl-none .d-xxl-block"
        >
          <img
            src={mobileCategoryIcon}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="img-fluid"
            alt="Category Selector Icon"
          />
        </div>

        <div className="d-none d-sm-block d-sm-none d-md-block">
          <select name="cars" id="cars">
            <option value="volvo">Ascending</option>
            <option value="volvo">Descending</option>
          </select>
          Sort By &nbsp;&nbsp; Price
          <select name="cars" id="cars">
            <option value="volvo">Lower than $20</option>
            <option value="volvo">$20 - $100</option>
            <option value="volvo">$100 - $200</option>
            <option value="volvo">More than $200</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default CategoryHeader;
