import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import car from '../../assets/car.jpg';

const itemList = [
  {
    name: 'strony www',
    path: '',
  },
  {
    name: 'spacery wirtualne',
    path: '',
  },
  {
    name: 'logo i identyfikacja wizualna',
    path: '',
  },
  {
    name: 'o nas',
    path: '',
  },
  {
    name: 'kontakt',
    path: '',
  },
];

const Header = () => {
  return (
    <section className='header-section'>
      {itemList.map((obj) => (
        <div className='header-section__sectioon-container'>
          <div className='header-section__sectioon-container__content'>
            <p>{obj.name}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Header;
