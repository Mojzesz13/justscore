import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import sectionImg from '../../assets/4.jpg';

const Header = ({
  setLogoColor,
  setTitleColor,
  setBurgerColor,
  showNavbar,
}) => {
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

  const handleOnMouseEnterBurger = () => {
    if (showNavbar) {
      return null;
    }
    setBurgerColor('white');
  };
  const handleOnMouseLeaveBurger = () => {
    if (showNavbar) {
      return null;
    }
    setBurgerColor('brown');
  };

  const itemList = [
    {
      name: 'strony www',
      path: '/website',
      img: sectionImg,
      onEnter: handleOnMouseEnterLogo,
      onLeave: handleOnMouseLeaveLogo,
    },
    {
      name: 'spacery wirtualne',
      path: '/virtualTour',
      img: sectionImg,
    },
    {
      name: 'logo i identyfikacja wizualna',
      path: '/virtualIdentification',
      img: sectionImg,
      onEnter: handleOnMouseEnterTitle,
      onLeave: handleOnMouseLeaveTitle,
    },
    {
      name: 'o nas',
      path: '/aboutUs',
      img: sectionImg,
    },
    {
      name: 'kontakt',
      path: '/contact',
      img: sectionImg,
      onEnter: handleOnMouseEnterBurger,
      onLeave: handleOnMouseLeaveBurger,
    },
  ];

  return (
    <section className='header-section'>
      {itemList.map((obj) => (
        <Link
          key={obj.name}
          to={obj.path}
          className='header-section__sectioon-container'
          onMouseEnter={obj.onEnter}
          onMouseLeave={obj.onLeave}
        >
          <div className='header-section__sectioon-container__content'>
            <p>{obj.name}</p> <img src={obj.img} alt={'test'} />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Header;
