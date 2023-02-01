import React from "react";
import Carousel from "../JS/Carousel";
import Hero from "../JS/Hero";

function Home() {
  return (
    <>
      <Hero />

      <div className="container">
        <h5>Popular</h5>
        <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          <Carousel show={3}>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
          </Carousel>
        </div>
      </div>


      <div className="container">
        <h5>Best Deal</h5>
        <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          <Carousel show={3}>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
          </Carousel>
        </div>
      </div>


      <div className="container">
        <h5>Best Performance</h5>
        <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
          <Carousel show={3}>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
            <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
            </div>
          </Carousel>
        </div>
      </div>

      <button className="btn btn-primary " type="button"> See More</button>
    </>
  );
}
export default Home;
