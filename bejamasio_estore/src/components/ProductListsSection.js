import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LargeScreenCategorySelector from "./LargeScreenCategorySelector";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductListsSection() {
  const ProductsInfo = useSelector((state) => state.GetAllProducts);
  const [allproducts, setAllProducts] = useState([]);
  const { FetchingProductLoading, products, error, ProductFetchedSuccessful } =
    ProductsInfo;

  useEffect(() => {
    {
      products &&
        setAllProducts(products.filter((product) => product.featured == false));
    }
    console.log(
      products.filter((product) => product.featured == false),
      "ade"
    );
  }, [products]);

  return (
    <section className="container mt-3">
      <div className="row">
        <LargeScreenCategorySelector />
        <div className="col-9 container">
          <div className="row ">
            <>
              {FetchingProductLoading ? (
                <div className="mt-5 container d-flex justify-content-center text-center text-muted h4">
                  <div>
                    <span className=" d-flex justify-content-center">
                      Loading data ...
                    </span>
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center ml-5 d-flex justify-content-center container">
                  {error}
                </div>
              ) : (
                <>
                  {allproducts.length > 0 ? (
                    <Pagination
                      data={allproducts}
                      RenderComponent={Product}
                      pageLimit={4}
                      dataLimit={6}
                    />
                  ) : (
                    <div>No products found.</div>
                  )}
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductListsSection;
