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
          ProductFetchedSuccessful: true, 
          filteredItems: action.payload.filter(product => product.featured === false)
  
      };

      case GetAllProducts_FAIL:
        return {FetchingProductLoading: false, error: action.payload , products: []}
  
      default:
        return state;
    }
  };