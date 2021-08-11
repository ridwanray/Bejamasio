import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsByPriceAndCategory } from "../actions/filterActions";
import toast from "react-hot-toast";

function MobileFilterModal() {
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
    productFilterByPrice !== "" && FireFilterActions();

    productFilterByPrice === "" &&
      productSortByCategories.length > 0 &&
      toast.error("Please select price 💰 range to filter");

      console.log("consoling from Category selector effect----");
  }, [productFilterByPrice, productSortByCategories, FireFilterActions]);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#cccccc" }}
            >
              <h5 className="modal-title form-inline " id="exampleModalLabel">
                <span>
                  <strong>Photography /</strong>{" "}
                </span>{" "}
                <span className="small" style={{ fontSize: "12px" }}>
                  {" "}
                  <small> Premium Photos</small>
                </span>
              </h5>

              <img src="Group 31.png" className="img-fluid" alt="" />
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-between">
                <div className="font-weight-bolder">
                  <strong className="h4">Filter</strong>
                </div>
                <div>
                  <strong>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </strong>
                </div>
              </div>

              <div>
                <div onChange={handleCategoryFilterCheckboxChange}>
                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="people"
                        
                      />
                      &nbsp;
                      <label htmlFor="checkboxOneInput">People</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="premiun"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">Premium</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="pets"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">Pets</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="food"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">Food</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="landmarks"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">Landmarks</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="cities"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">Cities</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="nature"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">Nature</label>
                    </div>
                  </div>
                </div>

                <strong className="h4"> Price range</strong>
                <div
                  onChange={(e) => {
                    setProductFilterByPrice(e.target.value);
                  }}
                >
                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="Lower than $20"
                        
                      />
                      &nbsp;
                      <label htmlFor="checkboxOneInput">Lower than $20</label>
                    </div>
                  </div>

                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="$20 - $100"
                        
                      />
                      &nbsp;<label htmlFor="checkboxOneInput">$20 - $100</label>
                    </div>
                  </div>
                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="$100 - $200"
                        
                      />
                      &nbsp;
                      <label htmlFor="checkboxOneInput">$100 - $200</label>
                    </div>
                  </div>
                  <div className="mt-2 mb-3 form-inline">
                    <div className="checkbox-example">
                      <input
                        type="checkbox"
                        value="More than $200"
                        
                      />
                      &nbsp;
                      <label htmlFor="checkboxOneInput">More than $200</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" modal-footer border-3 form-inline  d-flex  justify-content-between ">
              <div className="row container form-inline">
                <button
                  type="button"
                  className="bg-white text-dark col btn pr-5 pl-5 btn-md btn-block btn-outline-dark "
                >
                  CLEAR
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="col btn pr-5 pl-5 btn-md  btn-block  bg-dark text-white "
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileFilterModal;
