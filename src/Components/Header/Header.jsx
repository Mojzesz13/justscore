import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { v4 as uuidv4 } from 'uuid';
import bgImg1 from '../../assets/bg3.jpg';
import bgImg2 from '../../assets/bg2.jpg';
import bgImg3 from '../../assets/bg3.jpg';
import bgImg4 from '../../assets/bg1.jpg';
import bgImg5 from '../../assets/bg1.jpg';

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
      img: bgImg1,
      onEnter: handleOnMouseEnterLogo,
      onLeave: handleOnMouseLeaveLogo,
    },
    {
      name: 'social media',
      path: '/socialMedia',
      img: bgImg2,
    },
    // {
    //   name: 'spacery wirtualne',
    //   path: '/virtualTour',
    //   img: sectionImg,
    // },
    {
      name: 'logo i identyfikacja wizualna',
      path: '/virtualIdentification',
      img: bgImg3,
      onEnter: handleOnMouseEnterTitle,
      onLeave: handleOnMouseLeaveTitle,
    },
    {
      name: 'o nas',
      path: '/aboutUs',
      img: bgImg1,
    },
    {
      name: 'kontakt',
      path: '/contact',
      img: bgImg5,
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
