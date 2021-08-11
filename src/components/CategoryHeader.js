import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import mobileCategoryIcon from "../images/Group 31.png";
import {
  sortProductsByPrice,
  sortProductsAlphabetically,
} from "../actions/sortActions";

function CategoryHeader() {
  const [productSortByPrice, setProductSortByPrice] = useState("");
  const [productSortByAlpha, setProductSortByAlpha] = useState("");

  const dispatch = useDispatch();

  const filteredProducts = useSelector((state) => state.GetAllProducts);
  const { filteredItems } = filteredProducts;

  const sortProductAlpha = (sort) => {
    setProductSortByAlpha(sort);
    console.log("sort alpha", sort);
    dispatch(sortProductsAlphabetically(sort, filteredItems));
    // console.log(filteredItems, 'filter Items <=')
  };

  const sortProductByPrice = (sort) => {
    setProductSortByPrice(sort);
    console.log("sort by price:::::", sort);
    console.log("filter Items :::: <=", filteredItems);
    dispatch(sortProductsByPrice(sort, filteredItems));
  };

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
            height='25'
            width='25'
          />
        </div>

        <div className="d-none d-sm-block d-sm-none d-md-block">
          <select
            onChange={(e) => sortProductAlpha(e.target.value)}
            value={productSortByAlpha}
          >
            {/* <option value="Ascending">Choose</option> */}
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
          Sort By &nbsp;&nbsp; Price
          <select
            onChange={(e) => sortProductByPrice(e.target.value)}
            value={productSortByPrice}
          >
            {/* <option value="lowest">Choose</option> */}
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default CategoryHeader;
