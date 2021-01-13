import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import sectionImg from '../../assets/4.jpg';

const itemList = [
  {
    name: 'strony www',
    path: '',
    img: sectionImg,
  },
  {
    name: 'spacery wirtualne',
    path: '',
    img: sectionImg,
  },
  {
    name: 'logo i identyfikacja wizualna',
    path: '',
    img: sectionImg,
  },
  {
    name: 'o nas',
    path: '',
    img: sectionImg,
  },
  {
    name: 'kontakt',
    path: '',
    img: sectionImg,
  },
];

const Header = ({ setLogoColor, setTitleColor }) => {
  const handleOnMouseEnterLogo = () => {
    setLogoColor('white');
  };

  const handleOnMouseLeaveLogo = () => {
    setLogoColor('brown');
  };

  const handleOnMouseEnterTitle = () => {
    setTitleColor('white');
  };

  const handleOnMouseLeaveTitle = () => {
    setTitleColor('brown');
  };

  return (
    <section className='header-section'>
      <div
        className='header-section__sectioon-container'
        onMouseEnter={handleOnMouseEnterLogo}
        onMouseLeave={handleOnMouseLeaveLogo}
      >
        <div className='header-section__sectioon-container__content'>
          <p>strony www</p>
          <img src={sectionImg} alt={'test'} />
        </div>
      </div>
      <div className='header-section__sectioon-container'>
        <div className='header-section__sectioon-container__content'>
          <p>spacery wirtualne</p>
          <img src={sectionImg} alt={'test'} />
        </div>
      </div>
      <div
        className='header-section__sectioon-container'
        onMouseEnter={handleOnMouseEnterTitle}
        onMouseLeave={handleOnMouseLeaveTitle}
      >
        <div className='header-section__sectioon-container__content'>
          <p>logo i identyfikacja wizualna</p>
          <img src={sectionImg} alt={'test'} />
        </div>
      </div>
      <div className='header-section__sectioon-container'>
        <div className='header-section__sectioon-container__content'>
          <p>o nas</p>
          <img src={sectionImg} alt={'test'} />
        </div>
      </div>
      <div className='header-section__sectioon-container'>
        <div className='header-section__sectioon-container__content'>
          <p>kontakt</p>
          <img src={sectionImg} alt={'test'} />
        </div>
      </div>
    </section>
  );
};

export default Header;
