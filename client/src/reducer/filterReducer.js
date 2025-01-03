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
      // let userSortValue = document.getElementById("sort");
      // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let SortedProducts;

      //* Lengthly way

      // let tempSortedProducts = [...action.payload];

      // if (state.sorting_value === "featured") {
      //   SortedProducts = tempSortedProducts;
      // }

      // if (state.sorting_value === "lowest") {
      //   const priceSorting = (a, b) => {
      //     return a.price - b.price;
      //   };
      //   SortedProducts = tempSortedProducts.sort(priceSorting);
      // }

      // if (state.sorting_value === "highest") {
      //   const priceSorting = (a, b) => {
      //     return b.price - a.price;
      //   };
      //   SortedProducts = tempSortedProducts.sort(priceSorting);
      // }

      // if (state.sorting_value === "a-z") {
      //   SortedProducts = tempSortedProducts.sort((a, b) =>
      //     a.name.localeCompare(b.name)
      //   );
      // }
      // if (state.sorting_value === "z-a") {
      //   SortedProducts = tempSortedProducts.sort((a, b) =>
      //     b.name.localeCompare(a.name)
      //   );
      // }

      //* Short way to do the above code

      const { filter_products, sorting_value } = state;
      let tempSortedProducts = [...filter_products];

      const productSorting = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      SortedProducts = tempSortedProducts.sort(productSorting);

      if (sorting_value === "featured") {
        SortedProducts = [...filter_products];
      }

      return {
        ...state,
        filter_products: SortedProducts,
      };

    case "UPDATE_FILTERS_VALUES":
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      const { all_products } = state;
      const { text } = state.filters;
      // console.log("🚀 ~ filterReducer ~ text:", text);

      let tempfilterdProducts = [...all_products];
      if (text) {
        tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text.toLowerCase());
        });
      }
      // console.log("🚀 ~ tempfilterdProducts=tempfilterdProducts.filter ~ tempfilterdProducts:", tempfilterdProducts);

      return {
        ...state,
        filter_products: tempfilterdProducts,
      };

    default:
      state;
  }
};

export default filterReducer;
