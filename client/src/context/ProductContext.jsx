//? Create a Context
//? Provider
//? Consumer => useContext Hook

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

//* Create a Context
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

//* Provider
const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    console.log("🚀 ~ getProducts ~ res:", res);
  };

  useEffect(() => {
    getProducts(API);
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
