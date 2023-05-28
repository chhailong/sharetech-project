

import Cards from "../JS/Cards";
import CardTwo from "../JS/CardTwo";
import "../../App.css"
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Review = () => {

    return (
        <>
        <div className="container">
          <h1>Computer</h1>

          <Cards/>
          <br />
          <h1>Accessories Computer</h1>
          <br />
          <CardTwo/>

        </div>
       
        </>
    );
}
export default Review;