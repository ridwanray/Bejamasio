import React from "react";
import LargeScreenCategorySelector from "./LargeScreenCategorySelector";
import ProductLists from "./ProductLists";

function ProductListsSection() {
  return (
    <section className="container mt-3">
      <div className="row">
        <LargeScreenCategorySelector/>
        <div className="col-9 container">
          <div className="row ">
              <ProductLists/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductListsSection;
