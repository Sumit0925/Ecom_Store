import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/ProductContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>
);
