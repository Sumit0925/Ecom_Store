const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sortValue = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: sortValue,
      };

    case "SORTING_PRODUCTS":
      let SortedProducts;
      let tempSortedProducts = [...action.payload];

      if (state.sorting_value === "featured") {
        SortedProducts = tempSortedProducts;
      }

      if (state.sorting_value === "lowest") {
        const priceSorting = (a, b) => {
          return a.price - b.price;
        };
        SortedProducts = tempSortedProducts.sort(priceSorting);
      }

      if (state.sorting_value === "highest") {
        const priceSorting = (a, b) => {
          return b.price - a.price;
        };
        SortedProducts = tempSortedProducts.sort(priceSorting);
      }

      if (state.sorting_value === "a-z") {
        SortedProducts = tempSortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (state.sorting_value === "z-a") {
        SortedProducts = tempSortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return {
        ...state,
        filter_products: SortedProducts,
      };

    default:
      state;
  }
};

export default filterReducer;
