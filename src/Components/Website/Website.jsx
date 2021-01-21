import React from 'react';
import './Website.scss';
import Logo1 from '../../assets/mpr.svg';
import Logo2 from '../../assets/raiden.svg';
import Logo3 from '../../assets/ola.svg';
import Logo4 from '../../assets/wzzr.svg';
import Title from '../../common/title';
import Offert from '../../common/offert';

const siteList = [
  {
    name: 'mpr',
    src: Logo1,
    linkto: 'https://mojzesz13.github.io/Mpr/#/',
    logoClassName: 'logo mpr',
    cName: 'website-container__project versionA',
  },
  {
    name: 'Raiden',
    src: Logo2,
    linkto: 'http://raiden.pl/#/',
    logoClassName: 'logo raiden',
    cName: 'website-container__project versionB',
  },
  {
    name: 'ola',
    src: Logo3,
    linkto: 'https://mojzesz13.github.io/Mpr/#/',
    logoClassName: 'logo ola',
    cName: 'website-container__project versionB',
  },
  {
    name: 'wzzr',
    src: Logo4,
    linkto: 'https://mojzesz13.github.io/Mpr/#/',
    logoClassName: 'logo wzzr',
    cName: 'website-container__project versionA',
  },
  {
    name: 'sunInstal',
    src: Logo2,
    linkto: 'https://mojzesz13.github.io/Mpr/#/',
    logoClassName: 'logo raiden',
    cName: 'website-container__project versionA',
  },
  {
    name: 'neuclen  ',
    src: Logo1,
    linkto: 'https://mojzesz13.github.io/Mpr/#/',
    logoClassName: 'logo mpr',
    cName: 'website-container__project versionB',
  },
];

const offertList = [
  {
    title: 'Podstawowy',
    price: '200zł',
    text: 'Oferujemy Ci 1',
  },
  {
    title: 'Profesjonalny',
    price: '400zł',
    text: 'Oferujemy Ci 2',
  },
  {
    title: 'Premium',
    price: '600zł',
    text: 'Oferujemy Ci 3',
  },
];

const Website = () => {
  return (
    <div className='website-container'>
      <Title titleText='nasze projekty' />
      <div className='website-container__main-content'>
        {siteList.map((obj) => (
          <a key={obj.name} href={obj.linkto} className={obj.cName}>
            <img
              src={obj.src}
              className={obj.logoClassName}
              alt={obj.logoClassName}
            />
          </a>
        ))}
      </div>
      <Title titleText='oferta naszych pakietów' />
      {offertList.map((obj) => (
        <Offert
          key={obj.title}
          title={obj.title}
          price={obj.price}
          description={obj.text}
        />
      ))}
    </div>
  );
};

export default Website;
