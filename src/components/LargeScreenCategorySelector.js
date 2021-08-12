import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsByPriceAndCategory } from "../actions/filterActions";
import toast from "react-hot-toast";

function LargeScreenCategorySelector() {
  const dispatch = useDispatch();
  const ProductsInfo = useSelector((state) => state.GetAllProducts);
  const { filteredItems } = ProductsInfo;

  const [productFilterByPrice, setProductFilterByPrice] = useState("");
  const [productSortByCategories, setProductSortByCategories] = useState([]);

  const handleCategoryFilterCheckboxChange = (e) => {
    // console.log(e.target.value, e.target.checked);
    const checkedStatus = e.target.checked;

    const newFIlter = (value) => {
      const result = productSortByCategories.filter(
        (categoryword) => categoryword !== value
      );
      console.log(result);
      setProductSortByCategories(result);
    };

    checkedStatus
      ? setProductSortByCategories([...productSortByCategories, e.target.value])
      : newFIlter(e.target.value);
  };

  const FireFilterActions = useCallback(() => {
    dispatch(
      filterProductsByPriceAndCategory(
        productFilterByPrice,
        productSortByCategories,
        filteredItems
      )
    );
  }, [dispatch, productFilterByPrice, productSortByCategories, filteredItems]);

  useEffect(() => {
    productFilterByPrice !== "" && productSortByCategories.length > 0 && FireFilterActions();

    productFilterByPrice !== "" &&
      productSortByCategories.length == 0 &&
      toast.error("Select a category to proceed");

    productFilterByPrice === "" &&
      productSortByCategories.length > 0 &&
      toast.error("Please select price 💰 range to filter");

    console.log("consoling from Category selector effect----");
  }, [productFilterByPrice, productSortByCategories, FireFilterActions]);
  return (
    <>
      <div className="col-3 d-none d-sm-block">
        <strong> Category</strong>
        <br />
        <div onChange={handleCategoryFilterCheckboxChange}>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="people" id="" />
              &nbsp;
              <label htmlFor="">People</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="premiun" id="" />
              &nbsp;
              <label htmlFor="">Premium</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="pets" id="" />
              &nbsp;
              <label htmlFor="">Pets</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="food" id="" />
              &nbsp;
              <label htmlFor="">Food</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="landmarks" id="" />
              &nbsp;
              <label htmlFor="">Landmarks</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="cities" id="" />
              &nbsp;
              <label htmlFor="">Cities</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="nature" id="" />
              &nbsp;
              <label htmlFor="">Nature</label>
            </div>
          </div>
        </div>
        <div className="">
          <hr
            style={{ border: "2px solid #e4e4e4" }}
            className="container font-weight-bold"
          />
        </div>

        <strong> Price range</strong>
        <div
          onChange={(e) => {
            setProductFilterByPrice(e.target.value);
          }}
          className="mt-2 mb-3"
        >
          <div>
            <div className=" mb-2 pr-3 form-inline">
              <input
                type="radio"
                className="checkbox-example"
                name="age"
                value="Lower than $20"
              />
              <label>&nbsp;Lower than $20</label>
            </div>

            <div className=" mb-2 pr-3 form-inline">
              <input
                type="radio"
                className="mb-2"
                name="age"
                value="$20 - $100"
              />
              <label>&nbsp;$20 - $100</label>
            </div>

            <div className=" mb-2 pr-3 form-inline">
              <input
                type="radio"
                className="mb-2"
                name="age"
                value="$100 - $200"
              />
              <label>&nbsp;$100 - $200</label>
            </div>

            <div className=" mb-2 pr-3 form-inline">
              <input
                type="radio"
                className="mb-2"
                name="age"
                value="More than $200"
              />
              <label>&nbsp;More than $200</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LargeScreenCategorySelector;
