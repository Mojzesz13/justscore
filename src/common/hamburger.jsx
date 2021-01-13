import React from 'react';
import './hamburger.scss';

const Hamburger = ({ click }) => {
  return (
    <div className={click ? 'hamburgerMenu open' : 'hamburgerMenu '}>
      <div className="burgerBtn" />
    </div>
  );
};

export default Hamburger;
