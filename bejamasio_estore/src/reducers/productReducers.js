import {
    GetAllProducts_REQUEST,
    GetAllProducts_SUCCESS,
    GetAllProducts_FAIL,
  } from "../constants/productConstants";
  
  export const getAllProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case GetAllProducts_REQUEST:
        return {FetchingProductLoading: true, products: []}
  
      case GetAllProducts_SUCCESS:
        return {
          products: action.payload,
          FetchingProductLoading: false,
          ProductFetchedSuccessful: true  
      };

      case GetAllProducts_FAIL:
        return {FetchingProductLoading: false, error: action.payload }
  
      default:
        return state;
    }
  };