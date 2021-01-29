import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Hamburger from '../../common/hamburger';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavList from './NavList';

const Navbar = ({
  titleColor,
  showNavbar,
  setShowNavbar,
  logoIsHovered,
  setLogoIsHovered,
  burgerIsHovered,
  setBurgerIsHovered,
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = (e) => {
    e.preventDefault();
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);

    {
      visible ? setLogoIsHovered(false) : setLogoIsHovered(true);
    }
    {
      visible ? setBurgerIsHovered(false) : setBurgerIsHovered(true);
    }
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
        <Logo className={logoIsHovered ? 'logo active-logo' : 'logo'} />
      </Link>
      <div className='navbar-container__title' style={{ color: titleColor }}>
        Just Score
      </div>
      <div
        className='navbar-container__hamburger'
        style={{  zIndex: '5 ' }}
      >
        <Hamburger
          className='icon'
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
          setLogoIsHovered={setLogoIsHovered}
          burgerIsHovered={burgerIsHovered}
          setBurgerIsHovered={setBurgerIsHovered}
        />
      </div>
      <NavList showNavbar={showNavbar} />
    </nav>
  );
};

export default Navbar;
