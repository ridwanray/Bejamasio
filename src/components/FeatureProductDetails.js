import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import convertSize from "convert-size";

function FeatureProductDetails() {
  const ProductsInfo = useSelector((state) => state.GetAllProducts);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const { FetchingProductLoading, products, error } = ProductsInfo;

  useEffect(() => {
    products &&
      setFeaturedProduct(
        products.filter((product) => product.featured === true)
      );
  }, [products]);


  return (
    <>
      {FetchingProductLoading ? (
        <div className="mt-5 container d-flex justify-content-center text-center text-muted h4">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <div className="text-center ml-5 d-flex justify-content-center container">
          {error}
        </div>
      ) : (
        <>
          {featuredProduct.length > 0 && (
            <>
              <section className="container mt-n3">
                <div className="row">
                  <div className="col-8 d-none d-sm-block col-lg-8 col-xl-8 text-muted">
                  {featuredProduct[0].details.smallDesc}
                  </div>

                  <div className="col-6 text-start mt-4 mt-xl-0  mt-lg-0  col-lg-4 col-xl-4 text-xl-end text-lg-end">
                    <span className="mb-2">
                      <strong>Details</strong>
                    </span>{" "}
                    <br />
                    <span className="pt-2 text-muted">
                      Size:
                      {featuredProduct[0].details.dimmentions.height}
                      &nbsp;X&nbsp;
                      {featuredProduct[0].details.dimmentions.width} Pixel
                    </span>{" "}
                    <br />
                    {/* <span className="text-muted">Size: {formatBytes(15000)}</span> */}
                    <span className="text-muted">
                      Size: {convertSize(featuredProduct[0].details.size * 1000)}
                    </span>
                  </div>
                </div>
              </section>
              <div className="container">
                <hr
                  style={{ border: "2px solid #e4e4e4" }}
                  className="container font-weight-bold"
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default FeatureProductDetails;
