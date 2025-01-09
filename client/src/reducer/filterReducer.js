const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      // console.log("🚀 ~ filterReducer ~ priceArr:", priceArr);

      let maxPrice = 0;

      //* First Way -> using spread operator to unpack the elements of an array and using them in max() method

      // maxPrice = Math.max(...priceArr);
      // console.log("🚀 ~ filterReducer ~ maxPrice:", maxPrice);

      //* 2nd Way -> using reduce method;
      maxPrice = priceArr.reduce((acc, curElem) => {
        return Math.max(acc, curElem);
      }, 0);
      // console.log("🚀 ~ maxPrice=priceArr.reduce ~ maxPrice:", maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
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

    case "SET_PRICE_CHANGE":
      let checkedValue = action.payload;
      // console.log("Checked Value", checkedValue);
      return {
        ...state,
        filters: {
          ...state.filters,
          priceChange: checkedValue,
        },
      };

    case "FILTER_PRODUCTS":
      const { all_products } = state;
      const { text, category, company, color, price, priceChange } =
        state.filters;
      let tempfilterdProducts = [...all_products];

      if (text) {
        tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== "all") {
        tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
          // if (category == "all") {
          //   return [...all_products];
          // }
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
          // if (company == "all") {
          //   return tempfilterdProducts;
          // }
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (priceChange) {
        if (price === 0) {
          tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
            return curElem.price == price;
          });
        } else {
          tempfilterdProducts = tempfilterdProducts.filter((curElem) => {
            return curElem.price <= price;
          });
        }
      } else {
        tempfilterdProducts = tempfilterdProducts;
      }

      return {
        ...state,
        filter_products: tempfilterdProducts,
      };

    default:
      state;
  }
};

export default filterReducer;
