import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

//* To Get Cart data from Local Storage
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("EcomCart");
  if (localCartData.length == 0) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
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
    localStorage.setItem("EcomCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
