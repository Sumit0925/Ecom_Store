import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ curElem }) => {
  const { id, name, image, color, price, amount } = curElem;

  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // stock > amount ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* SubTotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* Remove */}
      <div>
        <FaTrash className="remove_icon"/>
      </div>
    </div>
  );
};

export default CartItem;
