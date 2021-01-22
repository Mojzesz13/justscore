import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from '../../common/hamburger';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Navbar = ({ logoColor, titleColor }) => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', showText);
    return () => {
      window.addEventListener('scroll', showText);
    };
  });

  const showText = () => {
    let viewPosition = window.scrollY;
    if (viewPosition <= 30) {
      setShowBorder(true);
    } else if (viewPosition > 30) {
      setShowBorder(false);
    }
  };

  return (
    <nav
      className={
        showBorder ? 'navbar-container ' : 'navbar-container active-navbar'
      }
    >
      <Link to='/' className='navbar-container__logo'>
        <Logo className='logo' />
      </Link>
      <div className='navbar-container__title' style={{ color: titleColor }}>
        Just Score
      </div>
      <div className='navbar-container__hamburger'>
        <Hamburger className='icon' />
      </div>
    </nav>
  );
};

export default Navbar;
