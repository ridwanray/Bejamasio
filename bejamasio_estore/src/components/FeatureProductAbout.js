import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FeatureProductAbout() {
  const ProductsInfo = useSelector((state) => state.GetAllProducts);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const { FetchingProductLoading, products, error, ProductFetchedSuccessful } =
    ProductsInfo;

  useEffect(() => {
    {
      products &&
        setFeaturedProduct(
          products.filter((product) => product.featured == true)
        );
    }
  }, [products]);

  return (
    <>
      {FetchingProductLoading ? (
        <div className="mt-5 container d-flex justify-content-center text-center text-muted h4">
          <div>
           
            <span className="visually-hidden">Loading...</span>
            
          </div>
        </div>
      ) : error ? (
        <div className="text-center ml-5 d-flex justify-content-center container">
          {error}
        </div>
      ) : (
        // {featuredProduct.length > 0 &&}
        <>
          {featuredProduct.length > 0 && (
            <section className="container mt-4">
              <div className="d-flex justify-content-between">
                <div className="row">
                  <div className="text-start col-12 col-sm-12 col-xl-8 col-lg-8">
                    <div>
                      <strong className="text-center">
                        About {featuredProduct[0].name}
                      </strong>
                    </div>

                    <strong>
                      {" "}
                      <span className="text-muted text-capitalize mt-1 mb-1 d-none d-sm-block">
                        {featuredProduct[0].category}
                      </span>
                    </strong>
                    <p className=" text-muted mt-2">
                      {featuredProduct[0].details.description}
                    </p>
                  </div>

                  <div className="col-12 col-sm-12 col-xl-4 col-lg-4">
                    <div className="text-xl-end text-lg-end text-sm-start text-container pr-n5">
                      <strong>People also buy</strong>
                    </div>

                    <div className="col-12 d-flex justify-content-between justify-content-lg-evenly justify-content-xl-evenly mt-2 text-lg-end text-xl-end ">
                      {featuredProduct[0].details.recommendations.map(
                        (recommeds) => (
                          <React.Fragment key={recommeds.src}>
                          <img 
                            className=""
                            src={recommeds.src}
                            alt=""
                            width="100"
                            height="120"
                          />&nbsp;
                          </React.Fragment>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default FeatureProductAbout;
