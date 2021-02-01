import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from '../../common/logo';
import Hamburger from '../../common/hamburger';
import NavList from './NavList';

const Navbar = ({
  showNavbar,
  setShowNavbar,
  titleIsHovered,
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
      visible ? setLogoIsHovered(0) : setLogoIsHovered(2);
    }
    {
      visible ? setBurgerIsHovered(2) : setBurgerIsHovered(1);
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
      <Logo
        showNavbar={showNavbar}
        logoIsHovered={logoIsHovered}
        setLogoIsHovered={setLogoIsHovered}
      />
      <div
        className={
          titleIsHovered
            ? 'navbar-container__title active-title'
            : 'navbar-container__title'
        }
      >
        Just Score
      </div>
      <div
        className='navbar-container__hamburger'
        //style={{  zIndex: '5 ' }}
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
