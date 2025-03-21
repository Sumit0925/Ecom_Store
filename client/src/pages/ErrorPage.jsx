import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you're looking for does not exist. How you get here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <Link to="/">
            <Button>Go Back to Home</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0 5rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
