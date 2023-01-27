
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/review.css" ; 
function Review (){

    const [click, setClick] = useState(false);
 
  
    const handleClick = () => setClick(!click);
    return (
        <div className="container">
            <div className="review">
            <h1>Review Page</h1>
        </div>
        <div className="dell">
            <Link to ="/products/dell" onClick={handleClick} >See product Dell</Link>
            <Link to ="/products/LG-gram" onClick={handleClick} ></Link>
            <Link to ="/products/acer-aspire7" onClick={handleClick} >Acer Aspire</Link>
            <Link to ="/products/acer-nitro" onClick={handleClick} >Acer Nitro</Link>
            <Link to ="/products/asus-zephyrus" onClick={handleClick} >Asus Zephyrus</Link>
            <Link to ="/products/dell-inspriron" onClick={handleClick} >Dell Insriron</Link>
            <Link to ="/products/dell-xps" onClick={handleClick} >Dell XPS</Link>
            <Link to ="/products/hp-zbook" onClick={handleClick} >HP Zbook</Link>
            <Link to ="/products/lenovo-flex" onClick={handleClick} >Lenovo Flex</Link>
            <Link to ="/products/lenovo-thinkpad" onClick={handleClick} >Lenovo ThinkPad</Link>
            <Link to ="/products/LG-Gram" onClick={handleClick} >LG Gram</Link>
            <Link to ="/products/ms-surface" onClick={handleClick} >MS surface Pro 7</Link>
            <Link to ="/products/ms-surface-pro9" onClick={handleClick} >MS surface Pro 9</Link>
            <Link to ="/products/ms-surface-book2" onClick={handleClick} >MS surface Book 2</Link>


           

        </div>


        </div>

        

    )
}
export default Review ;