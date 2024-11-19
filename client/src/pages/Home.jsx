import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeaturedProducts from "../components/FeaturedProduct";

const Home = () => {
  const data = {
    name: "ECOM Store",
  };

  return (
    <>
      <HeroSection myData={data} />;
      <FeaturedProducts/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
