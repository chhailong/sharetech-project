import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

function Navbar(){
  return(
=======
import "../CSS/navbarstyle.css" ; 


function Navbar() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  return (
>>>>>>> long_main
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ShareTech</Link>
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
<<<<<<< HEAD
=======
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to= "/" className='nav-links' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to= "/review"
                className='nav-links'
                onClick={handleClick}
              >
                Review
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to ="/recommendation"
                className='nav-links'
                onClick={handleClick}
              >
                Recommendation
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className='nav-links-mobile'
                onClick={handleClick}
              >
                Sign Up
              </Link>
            </li>

          </ul>
      
                                    
>>>>>>> long_main
        </div>
      </nav>
    </>
  );
}
<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;

>>>>>>> long_main
