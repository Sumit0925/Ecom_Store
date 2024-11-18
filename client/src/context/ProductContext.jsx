//? Create a Context
//? Provider
//? Consumer => useContext Hook

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

//* Create a Context
const AppContext = createContext();

const API = "https://ecomapi-production-d362.up.railway.app/api/products";

//* Provider
const AppProvider = ({ children }) => {
  const getProducts = async () => {
    const res = await axios.get(API);
    const products = await res.data;
    console.log("🚀 ~ getProducts ~ products:", products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ myName: "Sumit Angural" }}>
      {children}
    </AppContext.Provider>
  );
};

//* Creating Consumer using Custom Hook => UseContext Hook
const useProductContext = () => {
  const appContextValue = useContext(AppContext);

  if (!appContextValue) {
    //* if we don't get the value of "authContextValue" that means we haven't wrapped the <App/> component in AuthProvider;
    throw new Error("useAuth used outside the provider");
  }

  return appContextValue;
};

export { AppProvider, AppContext, useProductContext };
