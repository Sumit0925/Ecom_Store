const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    let cartProduct;

    let existingProduct = state.cart.find((curItem) => {
      return curItem.id == id + color;
    });

    if (existingProduct) {
      let updatedProduct = state.cart.map((curItem) => {
        if (curItem.id == id + color) {
          let newAmount = curItem.amount + amount;
          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }
          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_INCREASE") {
    let updatedCart = state.cart.map((curItem) => {
      if (curItem.id == action.payload) {
        let incAmount = curItem.amount + 1;
        if (incAmount >= curItem.max) {
          incAmount = curItem.max;
        }
        return {
          ...curItem,
          amount: incAmount,
        };
      } else {
        return curItem;
      }
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "SET_DECREASE") {
    let updatedCart = state.cart.map((curItem) => {
      if (curItem.id == action.payload) {
        let decAmount = curItem.amount - 1;
        if (decAmount < 1) {
          decAmount = 1;
        }
        return {
          ...curItem,
          amount: decAmount,
        };
      } else {
        return curItem;
      }
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  //* This is combined into single  action.type = "CART_ITEM_PRICE_TOTAL"

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let cartTotalItem = state.cart.reduce((acc, curItem) => {
  //     let { amount } = curItem;
  //     acc = acc + amount;
  //     return acc;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: cartTotalItem,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICE") {
  //   let cartTotalPrice = state.cart.reduce((acc, curItem) => {
  //     let { amount, price } = curItem;
  //     acc = acc + amount * price;
  //     return acc;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price: cartTotalPrice,
  //   };
  // }

  //* "CART_TOTAL_ITEM" and "CART_TOTAL_PRICE" combined
  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (acc, curItem) => {
        let { amount, price } = curItem;

        acc.total_item = acc.total_item + amount;
        acc.total_price = acc.total_price + amount * price;

        return acc;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curItem) => {
      return curItem.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
