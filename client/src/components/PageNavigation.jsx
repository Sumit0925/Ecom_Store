import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <>
    <Wrapper>
      <span>&gt;</span>
      <NavLink to={"/"}>Home</NavLink>/{title}
    </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  // max-width: 126.4rem;
  // margin:0 auto;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  // align-items: center;
  font-size: 2.6rem;
  // padding-left: 1.2rem;
  padding-left: 3.2rem;

  a {
    font-size: 2.6rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    height: 6rem;
    font-size: 2.4rem;
    a {
      font-size: 2.4rem;
      color: purple;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 5rem;
    font-size: 2.2rem;
    padding-left: 2.4rem;
    a {
      font-size: 2.2rem;
      color: purple;
    }
  }
`;

export default PageNavigation;
