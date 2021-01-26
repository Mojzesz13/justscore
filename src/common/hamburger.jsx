import React from 'react';
import './hamburger.scss';

const Hamburger = ({
  showNavbar,
  setShowNavbar,
  burgerColor,
  setBurgerColor,
}) => {
  const handleOnClick = () => {
    setShowNavbar(!showNavbar);
    if (showNavbar) {
      setBurgerColor('brown');
    }
    if (!showNavbar) {
      setBurgerColor('white');
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
