import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
      height: 5rem;
    }
      
  `;

  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/My_Logo.svg" alt="my logo image" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
