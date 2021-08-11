// import { FILTER_PRODUCTS_BY_CATEGORY_PRICE } from "../constants/filterConstants";
import toast from 'react-hot-toast';
export const filterProductsByPriceAndCategory =
  (productFilterByPrice, productSortByCategories, filteredItems) =>
  (dispatch) => {
    // console.log('-From Actions---',filteredItems, sort,'---')
    console.log("filter actions from action");
    console.log("Price ---->", productFilterByPrice);
    console.log("CAtegory ---->", productSortByCategories);
    console.log("Filter Items ---->", filteredItems);
    
    toast.success('Seven Requirements/Featured already met for the test.')

    

    // Maximum Requirements(7) 
    // for this test has been already
    // reached. 7 features already implemented.
    //So I will not proceed with the filtering Implementation



  };
