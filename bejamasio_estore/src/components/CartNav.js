import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import imageProd from "../images/pexels-evgeny-tchebotarev-2187304 (1) 1.png";
import {clearCartItems} from '../actions/cartActions'

function CartNav() {

  const dispatch = useDispatch();
  
  const closeCartNav = () => {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("counterbadge").style.display = "none";
  };

  const CartItemsInfo = useSelector((state) => state.Cart);
  const { cartItems } = CartItemsInfo;

  const clearCart = ()=>{
    console.log('items to be cleared')
    dispatch(clearCartItems());
  }

  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="#!" className="closebtn" onClick={closeCartNav}>
          &times;
        </a>

        {cartItems ? (
          //  cartItems.length
          <>
            <div className="mt-2">
              {cartItems.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="container d-flex justify-content-between">
                    <div>
                      <span className="mb-3" style={{ fontSize: "15px" }}>
                        <strong>{item.name}</strong>{" "}
                      </span>
                      <br />
                      <span
                        style={{ fontSize: "12px" }}
                        className="text-muted pt-0 mt-2"
                      >
                        {`${item.currency} ${(
                          Math.round(item.price * 100) / 100
                        ).toFixed(2)}`}
                      </span>
                    </div>

                    <div className="">
                      <img
                        src={item.image.src}
                        // src={item.image.src || item.image}
                        height="40"
                        width="80"
                        alt=""
                      />
                    </div>
                  </div>
                  <hr
                    style={{ border: "2px solid #e4e4e4" }}
                    className="mr-1 ml-1 container font-weight-bold"
                  />
                </React.Fragment>
              ))}
            </div>

            {cartItems.length > 0 && (
              <div className="container text-center d-grid gap-2 fixed-bottom">
                <button onClick={()=>{clearCart()}} type="button" class="btn btn-outline-dark btn-md ">
                  CLEAR
                </button>
              </div>
            )}

            {cartItems.length == 0 && (
              <div className="container text-center d-grid gap-2 fixed-bottom">
                No items in the cart
              </div>
            )}
          </>
        ) : (
          <div>No items in the cart</div>
        )}
      </div>
    </>
  );
}

export default CartNav;
