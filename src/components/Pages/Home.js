import React from "react";
import Carousel from "../JS/Carousel";
import Hero from "../JS/Hero";
import Cards from "../JS/Cards";

function Home() {
  return (
    <>
      <Hero />

      <div className="container">
        <h5>Popular</h5>
        <div style={{maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          <Carousel show={4}>
            <div style={{padding: 4}}>
              <Cards />
            </div>
            {/* <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div> */}
          </Carousel>
        </div>
      </div>


      <div className="container">
        <h5>Best Deal</h5>
        <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          <Carousel show={1}>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            {/* <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div> */}
          </Carousel>
        </div>
      </div>


      <div className="container">
        <h5>Best Performance</h5>
        <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          <Carousel show={1}>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            {/* <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div>
            <div style={{padding: 8}}>
              <Cards />
            </div> */}
          </Carousel>
        </div>
      </div>

      <div class="col-md-12 text-center pt-4 pb-4">
        <button class="btn btn-primary" type="button">Button</button>
      </div>
    </>
  );
}
export default Home;
