import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">
              Welcome to
              <h1>ECOM Store</h1>
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto similique ullam magni, deleniti neque doloribus cum
              sit, est sapiente dolore ducimus nemo libero quis illo voluptatem
              nihil mollitia laudantium inventore. Rem quos itaque esse vel
              porro. Aperiam deleniti sequi distinctio omnis atque eligendi id,
              rerum tenetur aliquid dignissimos reiciendis. Voluptate maiores
              enim sint cupiditate quibusdam et quidem fuga non facere?
              Cupiditate porro error quia laudantium alias facilis dignissimos
              molestiae asperiores nostrum. Neque molestiae reiciendis autem,
            </p>
            <Link to="/products">
              <Button>Shop Now</Button>
            </Link>
          </div>

          {/* Home Page Image */}
          <div className="hero-section-image">
            <figure>
              <img
                src="./images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HeroSection;
