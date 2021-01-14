import React from 'react';
import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <section className='loadingPage-container'>
      <div className='loadingPage-container__main'>
        <p> Just Score</p>
      </div>
      <div className='loadingPage-container__progress' />
    </section>
  );
};

export default LoadingPage;
