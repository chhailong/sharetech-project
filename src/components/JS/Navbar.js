import React, { useState, useEffect } from 'react';
import { Button } from './Pages/Button.sign.up';
import { Link } from 'react-router-dom';
import "../CSS/navbarstyle.css" ; 


function Navbar() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

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
          {button && <Button className ="button-sign-up" buttonStyle=''>Search</Button>}

         

          
                                       
        </div>
      </nav>
    </>
  );
}
export default Navbar;

