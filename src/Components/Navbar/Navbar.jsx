import React from 'react';
import './Navbar.scss';
import Hamburger from '../../common/hamburger';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Icon } from '../../assets/burger.svg';

const Navbar = ({ logoColor, titleColor }) => {
  return (
    <nav className='navbar-container'>
      <div className='navbar-container__logo'>
        <Logo className='logo' />
      </div>
      <div className='navbar-container__title' style={{ color: titleColor }}>
        Just Score
      </div>
      <div className='navbar-container__hamburger'>
        <Icon className='icon' />
      </div>
    </nav>
  );
};

export default Navbar;
