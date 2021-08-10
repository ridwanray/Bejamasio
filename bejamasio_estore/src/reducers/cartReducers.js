import { ADD_TO_CART, CLEAR_CART } from "../constants/cartConstants";

export const cartReducers = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case CLEAR_CART:
      return { cartItems: action.payload.cartItems};
    default:
      return state;
  }
};
