
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        </div>


        </div>

        

    )
}
export default Review ;