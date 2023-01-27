import React from "react";
import Carousel from "../JS/Carousel";
import "../../App.css"

function Review (){
    return (
        <>
            <div className="review">
                <h1>Review Page</h1>
            </div>

            <div>
                <h5>Top products</h5>
                <Carousel/>
            </div>
            
            <div>
                <h5>Best Price</h5>
                <Carousel/>
            </div>
           
            <div>
                <h5>Design</h5>
                <Carousel/>
            </div>
        </>
    );
}
export default Review;