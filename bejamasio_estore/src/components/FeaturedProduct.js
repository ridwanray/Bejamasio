import React from "react";
import imageFeature from "../images/pexels-evgeny-tchebotarev-2187304 (1) 1.png"; // with import
function FeaturedProduct() {
  return (
    <>
      <section className="container d-flex justify-content-between">
        <div className="">
          <strong>Samurai King Resting</strong>
        </div>

        <button className="btn btn-sm btn-block bg-dark text-white d-none d-sm-block">
          <span>ADD TO CART</span>
        </button>
      </section>
      <section className="container mt-2">
        <img
          className="container"
          src={imageFeature}
          alt="Feature Image"
        />
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
  );
}

export default FeaturedProduct;
