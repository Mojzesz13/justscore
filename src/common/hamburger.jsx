import React from 'react';
import './hamburger.scss';

const Hamburger = ({
  showNavbar,
  setShowNavbar,
  burgerColor,
  setBurgerColor,
  setLogoColor,
}) => {
  const handleOnClick = () => {
    setShowNavbar(!showNavbar);
    if (showNavbar) {
      setBurgerColor('brown');
      setLogoColor('brown');
    }
    if (!showNavbar) {
      setBurgerColor('white');
      setLogoColor('white');
    }
  };

  return (
    <div className='hamburgerMenu ' onClick={handleOnClick}>
      <div className='burgerBtn' style={{ backgroundColor: burgerColor }} />
      <div className='burgerBtn' style={{ backgroundColor: burgerColor }} />
      <div className='burgerBtn' style={{ backgroundColor: burgerColor }} />
    </div>
  );
};

export default Hamburger;
