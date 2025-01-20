import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/ProductContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const domain = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <StrictMode>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              bodyClassName="toastBody"
            />
          </StrictMode>
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
