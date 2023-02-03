import React from 'react';
import { Link } from 'react-router-dom';

import "../CSS/home.css";
function Hero() {
  return (
    <>
        <div className="p-5 text-center bg-image  mb-5 text-white" 
            style={{backgroundImage: `url(${'https://res.cloudinary.com/dboveomjz/image/upload/v1675446669/Accessories/Hero1_2_m3cyzj.jpg'})`,
            height:400
            }}
        > 
            <div className="container p-5 text-">
                <h1 className="display-4 fw-bold"> Explore new Technology </h1>
                <p className="lead fw-bold">Read, Learn, Share new technology with the guideline and Recommendation</p>
                
              <div className="col-md-12 text-center pt-4 pb-4">
                <Link className="btn btn-primary" to="/review">See More</Link>
              </div>  
               
            </div>
        </div>    
    </>
  );
}

export default Hero