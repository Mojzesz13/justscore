import React from 'react';
import './hamburger.scss';

const Hamburger = ({
  showNavbar,
  setShowNavbar,
  setLogoIsHovered,
  burgerIsHovered,
  setBurgerIsHovered,
}) => {
  const handleOnClick = () => {
    setShowNavbar(!showNavbar);
    if (showNavbar) {
      setLogoIsHovered(false);
      setBurgerIsHovered(false);
    }
    if (!showNavbar) {
      setLogoIsHovered(true);
      setBurgerIsHovered(true);
    }
  };

  return (
    <div
      className={
        burgerIsHovered
          ? 'hamburger-menu active-burger'
          : 'hamburger-menu desactive-burger '
      }
      onClick={handleOnClick}
    >
      <div className='burger-btn' />
      <div className='burger-btn' />
      <div className='burger-btn' />
    </div>
  );
};

export default Hamburger;
