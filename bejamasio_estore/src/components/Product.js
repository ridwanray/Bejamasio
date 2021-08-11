import React from "react";
import { useDispatch} from "react-redux";
import {addToCart} from '../actions/cartActions'
function Product(props) {

  const { bestseller, category, currency, id, image, name, price } = props.data;

  const productData = props.data
  const dispatch = useDispatch();
  




  const addItemToCart = (productData)=>{
      console.log('item added', productData);
      dispatch(addToCart(productData));
  }



  return (
    <>
      <div key={id} className=" col-12 col-sm-12 mb-2 col-lg-4 col-xl-4">
        <div className="card border-0 cartitemhoveractive ">
          <img
            src={image.src}
            className="card-img-top productimg"
            alt="..."
            height="200px"
          />
          {bestseller ? (
            <div className="">
              <div className="topleft">Best Seller</div>
            </div>
          ) : (
            ""
          )}
          <div  onClick={()=>{addItemToCart(productData)}} className="mt-n1 hidecarttab card-body bg-dark btn btn-sm border-0 text-white text-center">
            ADD TO CART
          </div>
          <span className="text-muted mt-1">{category}</span>
          <strong>{name}</strong>
          <span className="text-muted mt-1">{`${currency} ${(Math.round(price* 100) / 100).toFixed(2)}`}</span>
        </div>
      </div>
    </>
  );
}

export default Product;
