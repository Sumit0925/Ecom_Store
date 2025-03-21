import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cartContext";
import { Button } from "../styles/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  const { total_item } = useCartContext();

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link home-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Contact
            </NavLink>
          </li>

          {isAuthenticated && <p>{user.name}</p>}

          {isAuthenticated ? (
            <li>
              <Button
                className="login-btnn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button
                className="logout-btnn"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
            </li>
          )}

          <li id="cart">
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {/* open and close menu button */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => {
              setMenuIcon(true);
            }}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => {
              setMenuIcon(false);
            }}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
      font-size: 1.5rem;
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      // width: 100vw;
      width: 50%;
      // height: 100vh;
      // height: 80vw;
      // height: 45vh;
      position: absolute;
      top: 0;
      // left: 0;
      right: 0;
      background-color: ${({ theme }) => theme.colors.bg2};
      padding-top: 13rem;
      padding-bottom: 1rem;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
      border-radius: 2rem;

      visibility: hidden;
      // opacity: 0;
      // transform: translateX(100%);
      /* transform-origin: top; */
      // transition: all 3s linear;
    }

    #cart {
      padding-top: 1rem;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      // transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      // transition: all 3s linear;

      .navbar-link {
        font-size: 2.8rem;
      }
    }

    .login-btnn,
    .logout-btnn {
      transition: none;
    }

    .cart-trolley--link {
      position: relative;
      // padding-top: 1rem;

      .cart-trolley {
        position: relative;
        // padding-top: 1rem;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default Navbar;
