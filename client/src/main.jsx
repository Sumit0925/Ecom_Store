import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/ProductContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <FilterContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </FilterContextProvider>
  </AppProvider>
);
