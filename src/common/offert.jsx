import React, { useState } from 'react';
import './offert.scss';

export default function Offert({
  title,
  price,
  cNameContent,
  cNameDesctiption,
  description,
}) {
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
        className={`offert-container__content ${cNameContent}`}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <h2 className='offert-container__title'>{title}</h2>
        <p className='offert-container__price'> {price}</p>
      </div>
      <div
        className={`offert-container__description-holder ${cNameDesctiption}`}
      >
        {description}
      </div>
    </div>
  );
}
