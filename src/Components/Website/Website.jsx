import React from 'react';
import './Website.scss';
import { ReactComponent as Logo1 } from '../../assets/mpr.svg';
import { ReactComponent as Logo2 } from '../../assets/raiden.svg';
import { ReactComponent as Logo3 } from '../../assets/ola.svg';
import { ReactComponent as Logo4 } from '../../assets/wzzr.svg';

const Website = () => {
  return (
    <div className='website-container'>
      <div className='website-container__title'>
        <h2>nasze projekty</h2>
      </div>
      <div className='website-container__content'>
        <div className='test'>
          <div className='website-container__content__projects versionA'>
            <Logo1 className='logo mpr' />
          </div>
          <div className='website-container__content__projects versionB'>
            <Logo2 className='logo raiden' />
          </div>
        </div>
        <div className='test'>
          <div className='website-container__content__projects versionB'>
            <Logo3 className='logo ola' />
          </div>
          <div className='website-container__content__projects versionA'>
            <Logo4 className='logo wzzr' />
          </div>
        </div>
        <div className='test'>
          <div className='website-container__content__projects versionA'>
            <Logo3 className='logo ola' />
          </div>
          <div className='website-container__content__projects versionB'>
            <Logo4 className='logo wzzr' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
