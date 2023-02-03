import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/navbarstyle.css" ; 

function Navbar (){
  
  const [click, setClick] = useState(false);
 
  return(
    <>
      <nav className="navbar navbar-expand-lg "style={{backgroundColor:"#282c37"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ShareTech

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">Review</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recommend">Recommend</Link>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </div>
        </div>
      </nav>
    </>
  )

} 

export default Navbar;
