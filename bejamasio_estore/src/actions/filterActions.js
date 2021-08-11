import {
    FILTER_PRODUCTS_BY_CATEGORY_PRICE,
  } from "../constants/filterConstants";
  
  
  export const filterProductsByPriceAndCategory = (productFilterByPrice,productSortByCategories) => (dispatch) => {
    // console.log('-From Actions---',filteredItems, sort,'---')
    console.log('filter actions from action')
    console.log('Price ---->',productFilterByPrice)
    console.log('CAtegory ---->',productSortByCategories)
    // const sortedProducts = filteredItems
    // if (sort == "lowest") {
    //   const sortedProducts =  filteredItems.sort((a, b) => (a.price > b.price ? 1 : -1));
    //   } else{
    //     const sortedProducts =  filteredItems.sort((a, b) => (a.price > b.price ? -1 : 1));
    //   }
  
    // console.log(sortedProducts, sort)
  
    // dispatch({
    //   type: FILTER_PRODUCTS_BY_CATEGORY_PRICE,
    //   payload: {
    //     sort: sort,
    //     items: sortedProducts,
    //   },
    // });
  };
  
  