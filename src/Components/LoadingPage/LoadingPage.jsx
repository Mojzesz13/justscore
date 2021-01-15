import React from 'react';
import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <section className='loadingPage-container'>
      <div className='loadingPage-container__main'>
        <h1>Najlepszy wynik to zysk</h1>
      </div>
      <div className='loadingPage-container__progress' />
    </section>
  );
};

export default LoadingPage;
