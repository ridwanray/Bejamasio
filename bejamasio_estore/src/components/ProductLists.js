import React from "react";
import rectangleImg from "../images/Rectangle 2.1.png"; // with import

function ProductLists() {
  return (
    <>
      <div className=" col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card border-0 cartitemhoveractive ">
          <img
            src={rectangleImg}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          <div className="">
            <div className="topleft">Best Seller</div>
          </div>
          <div className="hidecarttab card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">People</span>
          <strong>Red Bench</strong>
          <span className="text-muted mt-1">$3.90 </span>
        </div>
      </div>
      <div className="col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card cartitemhoveractive border-0 ">
          <img
            src={rectangleImg}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          <div className="hidecarttab  card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">People</span>
          <strong>Red Bench</strong>
          <span className="text-muted mt-1">$3.90 </span>
        </div>
      </div>
      <div className="col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card cartitemhoveractive border-0 ">
          <img
            src={rectangleImg}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          <div className="hidecarttab  card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">People</span>
          <strong>Red Bench</strong>
          <span className="text-muted mt-1">$3.90 </span>
        </div>
      </div>
      <div className="col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card cartitemhoveractive border-0 ">
          <img
            src={rectangleImg}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          <div className="hidecarttab  card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">People</span>
          <strong>Red Bench</strong>
          <span className="text-muted mt-1">$3.90 </span>
        </div>
      </div>
      <div className="col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card cartitemhoveractive border-0 ">
          <img
            src={rectangleImg}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          <div className="hidecarttab  card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">People</span>
          <strong>Red Bench</strong>
          <span className="text-muted mt-1">$3.90 </span>
        </div>
      </div>
      <div className="col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card cartitemhoveractive border-0 ">
          <img
            src={rectangleImg}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          <div className="hidecarttab  card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">People</span>
          <strong>Red Bench</strong>
          <span className="text-muted mt-1">$3.90 </span>
        </div>
      </div>
      
    </>
  );
}

export default ProductLists;
