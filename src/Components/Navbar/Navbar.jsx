import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className='logo-container'>Logo</div>
      <ul className='menu-items'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#aboutUs'>O nas</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
