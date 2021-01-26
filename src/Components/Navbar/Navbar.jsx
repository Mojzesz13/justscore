import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from '../../common/hamburger';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavList from './NavList';
import useScrollPosition from '@react-hook/window-scroll';
import userEvent from '@testing-library/user-event';

const Navbar = ({
  logoColor,
  titleColor,
  burgerColor,
  setLogoColor,
  setBurgerColor,
}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={
        visible ? 'navbar-container ' : 'navbar-container active-navbar'
      }
    >
      <Link to='/' className='navbar-container__logo'>
        <Logo className='logo' />
      </Link>
      <div className='navbar-container__title' style={{ color: titleColor }}>
        Just Score
      </div>
      <div
        className='navbar-container__hamburger'
        style={{ color: titleColor, zIndex: '5 ' }}
      >
        <Hamburger
          className='icon'
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          burgerColor={burgerColor}
          setBurgerColor={setBurgerColor}
        />
      </div>
      <NavList showNavbar={showNavbar} />
    </nav>
  );
};

export default Navbar;
