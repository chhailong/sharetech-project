import React from "react";
import Carousel from "../JS/Carousel";
import Hero from "../JS/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div>
        <h5>Top products</h5>
        <Carousel />
      </div>

      <div>
        <h5>Best Price</h5>
        <Carousel />
      </div>

      <div>
        <h5>Design</h5>
        <Carousel />
      </div>

      <button type="button" class="btn btn-primary justify-content-center">
        See more
      </button>
    </>
  );
}
export default Home;
