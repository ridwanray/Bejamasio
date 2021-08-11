import {
    FILTER_PRODUCTS_BY_CATEGORY_PRICE,
  } from "../constants/filterConstants";
  

  export const filterProductsReducer = (state = {}, action) => {
    switch (action.type) {
      case FILTER_PRODUCTS_BY_CATEGORY_PRICE:
        return {
            ...state,
            filteredItems: action.payload.items,
          };

      default:
        return state;
    }
  };