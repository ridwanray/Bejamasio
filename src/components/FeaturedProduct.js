import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

function FeaturedProduct() {
  const ProductsInfo = useSelector((state) => state.GetAllProducts);
  const [featuredProduct, setFeaturedProduct] = useState("");
  const { FetchingProductLoading, products, error } = ProductsInfo;

  const dispatch = useDispatch();

  const addItemToCart = (productData) => {
    console.log("item added", productData);
    dispatch(addToCart(productData));
  };

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
          <div>
            <span className="d-flex justify-content-center">
              Loading data ...
            </span>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="text-center ml-5 d-flex justify-content-center container">
          {error}
        </div>
      ) : (
        <>
          {featuredProduct.length > 0 && (
            <>
              <section className="container d-flex justify-content-between">
                <div className="">
                  <strong>{featuredProduct[0].name}</strong>
                </div>

                <button
                  onClick={() => {
                    addItemToCart(featuredProduct[0]);
                  }}
                  aria-label='add-featured-product-to-cart'
                  className="btn btn-sm btn-block bg-dark text-white d-none d-sm-block"
                >
                  <span>ADD TO CART</span>
                </button>
              </section>
              <section className="container mt-2">
                <img
                  className="container img-height"
                  src={featuredProduct[0].image.src}
                  alt={featuredProduct[0].image.src}
                  height="330"
                />
                <div className="bottomleft">Photo of the day</div>
              </section>
              <section>
                <div className="mt-3 d-grid gap-2 container border-1 d-block d-sm-none">
                  <button
                  aria-label="add-to-cart-mobile"
                    onClick={() => {
                      addItemToCart(featuredProduct[0]);
                    }}
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
      )}
    </>
  );
}

export default FeaturedProduct;
