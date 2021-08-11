import {
  SORT_PRODUCTS_BY_PRICE,
  SORT_PRODUCTS_ALPHABETICALLY,
} from "../constants/sortConstants";

export const sortProductsByPrice = (sort, filteredItems) => (dispatch) => {
  console.log(
    "-From Actions sortProductsByPrice---",
    filteredItems,
    sort,
    "---"
  );
  const sortedProducts = filteredItems;
  if (sort === "lowest") {
    const sortedProducts = filteredItems.sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
  } else if (sort === "highest") {
    const sortedProducts = filteredItems.sort((a, b) =>
      a.price > b.price ? -1 : 1
    );
  }

  console.log(sortedProducts, sort);

  dispatch({
    type: SORT_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};

export const sortProductsAlphabetically =
  (sort, filteredItems) => (dispatch) => {
    const sortedProducts = filteredItems;
    if (sort === "Ascending") {
      const sortedProducts = filteredItems.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
    } else if (sort === "Descending") {
      const sortedProducts = filteredItems.sort((a, b) =>
        a.name > b.name ? -1 : 1
      );
    }

    console.log(sortedProducts);
    dispatch({
      type: SORT_PRODUCTS_ALPHABETICALLY,
      payload: {
        sort: sort,
        items: sortedProducts,
      },
    });
  };
