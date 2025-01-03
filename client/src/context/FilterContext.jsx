import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "featured",
  filters: {
    text: "",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //* to set grid_view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //* to set list_view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //* sorting function
  const sorting = (event) => {
    let sortValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
  };

  //* update the filter values
  const updateFilterValue = (event) => {
    let { name, value } = event.target;

    return dispatch({
      type: "UPDATE_FILTERS_VALUES",
      payload: { name, value },
    });
  };

  //* to sort the products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  const appContextValue = useContext(FilterContext);

  if (!appContextValue) {
    //* if we don't get the value of "authContextValue" that means we haven't wrapped the <App/> component in AuthProvider;
    throw new Error("useProductContext used outside the provider");
  }

  return appContextValue;
};

export { FilterContextProvider, useFilterContext };
