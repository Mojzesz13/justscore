import React from 'react';
import Title from '../../common/title';
import './Contact.scss';

const Contact = () => {
  return (
    <section className='contact-container'>
      <Title titleText='Kontakt' />
      <div className='contact-container__map' />
      <div className='contact-container__text'>
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          debitis atque nulla ratione dolorum praesentium quos nemo saepe eius.
          Illum quae cumque id sed, repellat labore voluptate voluptatem
          accusantium aspernatur?
        </p>
      </div>
      <div className='contact-container__button'>667667667</div>
    </section>
  );
};

export default Contact;
