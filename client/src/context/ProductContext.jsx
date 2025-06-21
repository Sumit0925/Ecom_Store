//? Create a Context
//? Provider
//? Consumer => useContext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

//* Create a Context
const AppContext = createContext();

const initialData = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

//* Provider
const AppProvider = ({ children }) => {
  const backendApi = import.meta.env.VITE_APP_URI_API;
  const API = `${backendApi}/api/products`;

  const [state, dispatch] = useReducer(reducer, initialData);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);
      const products = await res.data.products;
      // console.log("🚀 ~ getProducts ~ products:", products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log("getProducts errror", error);
    }
  };

  //* Second API Call for Single Product

  const getSingleProduct = async (API) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API);
      const singleProduct = await res.data.singleProduct;
      // console.log("🚀 ~ getSingleProduct ~ singleProduct:", singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
      console.log("singleProduct Error", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, API, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//* Creating Consumer using Custom Hook => UseContext Hook
const useProductContext = () => {
  const appContextValue = useContext(AppContext);

  if (!appContextValue) {
    //* if we don't get the value of "authContextValue" that means we haven't wrapped the <App/> component in AuthProvider;
    throw new Error("useProductContext used outside the provider");
  }

  return appContextValue;
};

export { AppProvider, AppContext, useProductContext };
