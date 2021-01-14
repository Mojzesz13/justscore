import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import sectionImg from '../../assets/4.jpg';

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

  const itemList = [
    {
      name: 'strony www',
      path: '',
      img: sectionImg,
      onEnter: handleOnMouseEnterLogo,
      onLeave: handleOnMouseLeaveLogo,
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
      onEnter: handleOnMouseEnterTitle,
      onLeave: handleOnMouseLeaveTitle,
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

  return (
    <section className='header-section'>
      {itemList.map((obj) => (
        <div
          className='header-section__sectioon-container'
          onMouseEnter={obj.onEnter}
          onMouseLeave={obj.onLeave}
        >
          <div className='header-section__sectioon-container__content'>
            <p>{obj.name}</p> <img src={obj.img} alt={'test'} />{' '}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Header;
