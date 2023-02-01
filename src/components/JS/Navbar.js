import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/navbarstyle.css" ; 


function Navbar() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={handleClick}>
            ShareTech
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
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
      
                                    
        </div>
      </nav>
    </>
  );
}
export default Navbar;

