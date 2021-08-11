import {
  SORT_PRODUCTS_BY_PRICE,
  SORT_PRODUCTS_ALPHABETICALLY,
} from "../constants/sortConstants";

export const sortProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sortedItems: action.payload.items,
      };

    case SORT_PRODUCTS_ALPHABETICALLY:
      return {
        ...state,
        sortedItems: action.payload.items,
      };

    default:
      return state;
  }
};
