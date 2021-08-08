import React, { useState, useEffect } from "react";
import imageFeature from "../images/pexels-evgeny-tchebotarev-2187304 (1) 1.png";
import { useDispatch, useSelector } from "react-redux";

function FeaturedProduct() {
  const dispatch = useDispatch();
  const ProductsInfo = useSelector((state) => state.GetAllProducts);
  const [featuredProduct, setFeaturedProduct] = useState('')
  const { FetchingProductLoading, products, error, ProductFetchedSuccessful } =
    ProductsInfo;

  useEffect(() => {
    console.log(products)
    {
      ProductFetchedSuccessful && products
        && setFeaturedProduct(products.filter(product => product.featured == true));
    }
    console.log(products)
  }, [ProductsInfo]);

  return (
    <>
      {FetchingProductLoading ? (
        <div className="mt-5 container d-flex justify-content-center text-center text-muted h4">
          <span className="text-center">Loading data ...</span>
        </div>
      ) : error ? (
        <div className="text-center ml-5 d-flex justify-content-center container">
          {error}
        </div>
      ) : (
        <>
          <section className="container d-flex justify-content-between">
            <div className="">
              <strong>{featuredProduct.name}</strong>
            </div>

            <button className="btn btn-sm btn-block bg-dark text-white d-none d-sm-block">
              <span>ADD TO CART</span>
            </button>
          </section>
          <section className="container mt-2">
            <img className="container" src='' alt="Feature Image" />
            <div className="bottomleft">Photo of the day</div>
          </section>
          <section>
            <div className="mt-3 d-grid gap-2 container border-1 d-block d-sm-none">
              <button
                className="btn btn-md btn-block bg-dark text-white"
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default FeaturedProduct;
