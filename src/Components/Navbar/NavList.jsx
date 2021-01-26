import React from 'react';
import { Link } from 'react-router-dom';
import './Navlist.scss';

const navListItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Strony www',
    path: '/website',
  },
  {
    name: 'Spacery wirtualne',
    path: '/virtualTour',
  },
  {
    name: 'Logo i identyfikacja wizualna',
    path: '/virtualIdentification',
  },
  {
    name: 'O nas',
    path: '/aboutUs',
  },
  {
    name: 'Kontakt',
    path: '/',
  },
];

function NavList({ showNavbar }) {
  return (
    <>
      <div
        className={
          showNavbar ? 'navList-Container active' : 'navList-Container'
        }
      >
        <div className='navList-Container__holder'>
          {navListItems.map((obj) => (
            <Link
              key={obj.name}
              to={obj.path}
              className='navList-Container__item'
            >
              {obj.name}
            </Link>
          ))}
        </div>

        <div className='navList-Container__decoration-bar'></div>
      </div>
    </>
  );
}

export default NavList;
