import {
    GetAllProducts_REQUEST,
    GetAllProducts_SUCCESS,
    GetAllProducts_FAIL,
  } from "../constants/productConstants";
  
  export const getAllProductsReducer = (state = {}, action) => {
    switch (action.type) {
      case GetAllProducts_REQUEST:
        return { loading: true };
  
      case GetAllProducts_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          success: true,
        };
  
      case GetAllProducts_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };