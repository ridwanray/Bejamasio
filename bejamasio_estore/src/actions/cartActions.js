import toast, { Toaster } from 'react-hot-toast';
import { ADD_TO_CART, CLEAR_CART } from "../constants/cartConstants";

export const addToCart = (productData) => (dispatch, getState) =>{
  const cartItems = getState().Cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {

    console.log(x.id, productData.id, 'anoki')
    if (x.id === productData.id) {
      alreadyExists = true;
      console.log('Toastify that items already in the cart')
      toast.error('Item already in cart!')

    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...productData});
    console.log('not yet present')
    toast.success('Item added in cart!')
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("mySidenav").style.display = "inline";
  document.getElementById("counterbadge").style.display = "inline";
};



export const clearCartItems = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CLEAR_CART,
      payload: { cartItems:[]},
    });
    localStorage.removeItem("cartItems")
    document.getElementById("mySidenav").style.display = "none";
  };
 
};
