import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { v4 as uuidv4 } from 'uuid';
import sectionImg from '../../assets/4.jpg';

const Header = ({
  showNavbar,
  logoIsHovered,
  setLogoIsHovered,
  setTitleIsHovered,
  burgerIsHovered,
  setBurgerIsHovered,
}) => {
  const handleOnMouseEnterLogo = () => {
    if (logoIsHovered !== 2) setLogoIsHovered(1);
  };
  const handleOnMouseLeaveLogo = () => {
    if (logoIsHovered !== 2) setLogoIsHovered(0);
  };

  const handleOnMouseEnterTitle = () => {
    setTitleIsHovered(true);
  };
  const handleOnMouseLeaveTitle = () => {
    setTitleIsHovered(false);
  };

  const handleOnMouseEnterBurger = () => {
    console.log(burgerIsHovered);
    if (showNavbar) {
      return null;
    }
    if (burgerIsHovered !== 1) setBurgerIsHovered(3);
    console.log(burgerIsHovered);
  };
  const handleOnMouseLeaveBurger = () => {
    if (showNavbar) {
      return null;
    }
    if (burgerIsHovered !== 1) setBurgerIsHovered(4);
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
      name: 'social media',
      path: '/socialMedia',
      img: sectionImg,
    },
    // {
    //   name: 'spacery wirtualne',
    //   path: '/virtualTour',
    //   img: sectionImg,
    // },
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
      {itemList.map(({ name, path, img, onEnter, onLeave }) => (
        <Link
          key={uuidv4()}
          to={path}
          className='header-section__section-container'
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onClick={onLeave}
        >
          <div className='header-section__section-container__content'>
            <p>{name}</p> <img src={img} alt={name} />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Header;
