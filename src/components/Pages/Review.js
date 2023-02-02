
import Carousel from "../JS/Carousel";
import Cards from "../JS/Cards";
import "../../App.css"

import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Review = () =>{

    return (
        <>

          <div className="container">
          <div className="review">
              <h1>Review Page</h1>
          </div>


          <div className="container">
      <h5>Popular</h5>
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
            <h5>Best Deal</h5>
            <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
              <Carousel show={1}>
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
            <h5>Best Performance</h5>
            <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}>
              <Carousel show={1}>
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

      
        </div>

        </>
    );
}
export default Review;