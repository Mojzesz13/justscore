import React from 'react';
import './VirtualIdentification.scss';
import Title from '../../common/title';

const VirtualIdentification = () => {
  let logoTypes = [
    {
      img: '',
      title: 'Podstawowy',
      headLine: 'w ramach pakietu oferujemy',
      offert: 'test1',
    },
    {
      img: '',
      title: 'Profesjonalny',
      headLine: 'w ramach pakietu oferujemy',
      offert: 'test2',
    },
    {
      img: '',
      title: 'Premium',
      headLine: 'w ramach pakietu oferujemy',
      offert: 'test3',
    },
  ];

  return (
    <>
      <Title titleText='Logotyy' />
      <div className='virtual-identification-container'>
        {logoTypes.map((obj) => (
          <div className='virtual-identification-container__content'>
            <div className='img'>{obj.img}</div>
            <h1>{obj.title}</h1>
            <h2>{obj.headLine}</h2>
            <ul>
              <li>{obj.offert}</li>
              <li>{obj.offert}</li>
              <li>{obj.offert}</li> 
              <li>{obj.offert}</li> 
              <li>{obj.offert}</li>
              <li>{obj.offert}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default VirtualIdentification;
