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
};


//* Provider
const AppProvider = ({ children }) => {
  const API = "https://ecomapi-production-d362.up.railway.app/api/products";
  
  const [state, dispatch] = useReducer(reducer, initialData);

  const getProducts = async () => {
    dispatch({ type: "SET_ LOADING" });
    try {
      const res = await axios.get(API);
      const products = await res.data.products;
      console.log("🚀 ~ getProducts ~ products:", products)
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.log("getProducts errror", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
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
