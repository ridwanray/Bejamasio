import { FILTER_PRODUCTS_BY_CATEGORY_PRICE } from "../constants/filterConstants";
import toast from "react-hot-toast";

export const filterProductsByPriceAndCategory =
  (productFilterByPrice, productSortByCategories, filteredItems) =>
  (dispatch) => {
    console.log("filter actions from action");
    console.log("Price ---->", productFilterByPrice);
    console.log("CAtegory ---->", productSortByCategories);
    console.log("Filter Items ---->", filteredItems);

    if (productFilterByPrice == "Lower than $20") {
      var min = 0;
      var max = 20;
    } else if (productFilterByPrice == "$20 - $100") {
      var min = 20;
      var max = 100;
    } else if (productFilterByPrice == "$100 - $200") {
      var min = 100;
      var max = 200;
    } else if (productFilterByPrice == "More than $200") {
      var min = 201;
      var max = null;
    }


    let filter = {
      category: productSortByCategories,
      price: {
        min: min,
        max: max,
      },
    };

    //Filter Builder
    const buildFilter = (filter) => {
      let query = {};
      for (let keys in filter) {
        if (
          filter[keys].constructor === Object ||
          (filter[keys].constructor === Array && filter[keys].length > 0)
        ) {
          query[keys] = filter[keys];
        }
      }
      return query;
    };

    const query = buildFilter(filter);

    //filter function
    const filterData = (filteredItems, query) => {
      const keysWithMinMax = ["price"];
      const filteredData = filteredItems.filter((item) => {
        for (let key in query) {
          /* Note: this initial check can be modified in case
           *       you still want to include results that may
           *       not have that specific key.
           *
           *       If that is the case, you can just change these
           *       checks to:
           *
           *       if (item[key] !=== undefined) {
           *           if (keysWithMinMax.includes(key)) {
           *              ...
           *           }
           *           else if (!query[key].includes(item[key])) {
           *              ...
           *           }
           *       }
           *
           *       This way your program won't crash when the key doesn't
           *       exist.
           */
          if (item[key] === undefined) {
            return false;
          } else if (keysWithMinMax.includes(key)) {
            if (query[key]["min"] !== null && item[key] < query[key]["min"]) {
              return false;
            }
            if (query[key]["max"] !== null && item[key] > query[key]["max"]) {
              return false;
            }
          } else if (!query[key].includes(item[key])) {
            return false;
          }
        }
        return true;
      });
      return filteredData;
    };

    const result = filterData(filteredItems, query);
    console.log(result);
    console.log(result.length);

    toast.success(
        `Items found: ${result.length}`
    );
    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY_PRICE,
      payload: {
        // sort: sort,
        items: result,
      },
    });
  };
