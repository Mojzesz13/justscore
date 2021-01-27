import React from 'react';
import './Website.scss';
import { ReactComponent as Logo1 } from '../../assets/mpr.svg';
import { ReactComponent as Logo2 } from '../../assets/raiden.svg';
import { ReactComponent as Logo3 } from '../../assets/ola.svg';
import { ReactComponent as Logo4 } from '../../assets/wzzr.svg';
import Title from '../../common/title';
import Offert from '../../common/offert';

const siteList = [
  {
    name: 'mpr',
    src: <Logo1 className='logo mpr' />,
    linkTo: 'https://mojzesz13.github.io/Mpr/#/',
    cName: 'website-container__project versionA',
  },
  {
    name: 'Raiden',
    src: <Logo2 className='logo raiden' />,
    linkTo: 'http://raiden.pl/#/',
    cName: 'website-container__project versionB',
  },
  {
    name: 'ola',
    src: <Logo3 className='logo ola' />,
    linkTo: 'https://mojzesz13.github.io/Mpr/#/',
    cName: 'website-container__project versionB',
  },
  {
    name: 'wzzr',
    src: <Logo4 className='logo wzzr' />,
    linkTo: 'https://mojzesz13.github.io/Mpr/#/',
    cName: 'website-container__project versionA',
  },
  {
    name: 'sunInstall',
    src: <Logo1 className='logo raiden' />,
    linkTo: 'https://mojzesz13.github.io/Mpr/#/',
    cName: 'website-container__project versionA',
  },
  {
    name: 'neuclen  ',
    src: <Logo2 className='logo mpr' />,
    linkTo: 'https://mojzesz13.github.io/Mpr/#/',
    cName: 'website-container__project versionB',
  },
];

const offertList = [
  {
    title: 'Podstawowy',
    price: '200zł',
    text: 'Oferujemy Ci 1',
    cNameContent: 'right',
    cNameDesctiption: 'leftD',
  },
  {
    title: 'Profesjonalny',
    price: '400zł',
    text: 'Oferujemy Ci 2',
    cNameContent: 'left',
    cNameDesctiption: 'rightD',
  },
  {
    title: 'Premium',
    price: '600zł',
    text: 'Oferujemy Ci 3',
    cNameContent: 'right',
    cNameDesctiption: 'leftD',
  },
  {
    title: 'Ultra Mega Wypasiony',
    price: '800zł',
    text: 'Oferujemy Ci 4',
    cNameContent: 'left',
    cNameDesctiption: 'rightD',
  },
];

const Website = () => {
  return (
    <div className='website-container'>
      <Title titleText='nasze projekty' />
      <div className='website-container__main-content'>
        {siteList.map(({ name, linkTo, cName, src }) => (
          <a key={name} href={linkTo} className={cName}>
            {src}
          </a>
        ))}
      </div>
      <Title titleText='oferta naszych pakietów' />
      {offertList.map(
        ({ title, price, text, cNameContent, cNameDesctiption }) => (
          <Offert
            key={title}
            title={title}
            price={price}
            description={text}
            cNameContent={cNameContent}
            cNameDesctiption={cNameDesctiption}
          />
        )
      )}
    </div>
  );
};

export default Website;
