import React, { useState } from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const { isAuthenticated } = useAuth0();

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    stock > amount ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors :
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <TiTick className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* Add to Car */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      {isAuthenticated ? (
        <Link
          to={"/cart"}
          onClick={() => addToCart(id, color, amount, product)}
        >
          <Button className="btn">Add to Cart</Button>
        </Link>
      ) : (
        <Button
          className="btn"
          onClick={() =>
            toast.error("Login First", {
              style: { fontSize: "1.7rem" },
              className: "toast-mobile",
            })
          }
        >
          Add to Cart
        </Button>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    // font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .toast-mobile {
      width: 1px;
    }
  }
`;

export default AddToCart;
