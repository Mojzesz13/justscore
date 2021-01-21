import React, { useState } from 'react';
import './offert.scss';

export default function Offert({ title, price, description }) {
  const [activeClass, setActiveClass] = useState(false);

  const handleOnMouseEnter = () => {
    setActiveClass(true);
  };

  const handleOnMouseLeave = () => {
    setActiveClass(false);
  };

  return (
    <div
      className={activeClass ? 'offert-container active' : 'offert-container '}
    >
      <div
        className='offert-container__content'
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <h2 className='offert-container__title'>{title}</h2>
        <p className='offert-container__price'> {price}</p>
        <p className='offert-container__text'>{description}</p>
      </div>
    </div>
  );
}
