import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useAuth0 } from "@auth0/auth0-react";

const CartContext = createContext();

//* To Get Cart data from Local Storage
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("EcomCart");
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartContextProvider = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  };

  //* Increment the Product
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };
  //* Decrement the Product
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  //* To remove a item from Cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //* To Clear the Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //* To Add Cart Data In local Storage
  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    if (isAuthenticated) {
      localStorage.setItem("EcomCart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        setIncrease,
        setDecrease,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
