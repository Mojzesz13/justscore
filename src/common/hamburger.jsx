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
      setLogoIsHovered(0);
      setBurgerIsHovered(2);
    }
    if (!showNavbar) {
      setLogoIsHovered(2);
      setBurgerIsHovered(1);
    }
  };

  const burgerCondition = burgerIsHovered;

  return (
    <div
      className={`hamburger-menu
                 ${burgerCondition === 1 ? 'active-burger-navbar 1' : ''}
                 ${burgerCondition === 2 ? 'desactive-burger-navbar ' : ''}
                 ${burgerCondition === 3 ? 'active-burger-header' : ''}
                 ${burgerCondition === 4 ? 'desactive-burger-click' : ''}
        `}
      onClick={handleOnClick}
    >
      <div className='burger-btn' />
      <div className='burger-btn' />
      <div className='burger-btn' />
    </div>
  );
};

export default Hamburger;
