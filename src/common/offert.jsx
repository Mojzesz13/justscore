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
      className={
        activeClass ? 'offert-container active-offert' : 'offert-container '
      }
    >
      <div
        className='offert-container__content '
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <h2 className='offert-container__title'>
          {activeClass ? price : title}
        </h2>
      </div>
      <div className='offert-container__description-holder'>
        <p>{description}</p>
      </div>
    </div>
  );
}
