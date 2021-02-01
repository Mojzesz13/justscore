import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../assets/logo.svg';
import './logo.scss';

const Logo = ({ showNavbar, logoIsHovered, setLogoIsHovered }) => {
  const handleOnLogoClick = () => {
    if (!showNavbar) setLogoIsHovered(0);
  };

  let logoCondition = logoIsHovered;

  return (
    <Link to='/' className='navbar-container__logo'>
      <LogoImg
        className={`logo
                 ${logoCondition === 1 ? 'active-logo-header' : ''}
                 ${logoCondition === 2 ? 'active-logo-navbar' : ''}
        `}
        onClick={handleOnLogoClick}
      />
    </Link>
  );
};

export default Logo;
