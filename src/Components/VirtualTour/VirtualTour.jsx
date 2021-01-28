import React from 'react';
import Offert from '../../common/offert';
import Title from '../../common/title';
import './VirtualTour.scss';

const VirtualTour = () => {
  let walkList = [
    {
      title: 'w pomieszczeniu',
      text:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum aspernatur fugit, ea odit qui accusantium ullam repudiandae',
      img: '',
    },
    {
      title: 'na zewnątrz',
      text:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum aspernatur fugit, ea odit qui accusantium ullam repudiandae',
      img: '',
    },
    {
      title: 'w pomieszczeniu',
      text:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum aspernatur fugit, ea odit qui accusantium ullam repudiandae',
      img: '',
    },
    {
      title: 'na zewnątrz',
      text:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eum aspernatur fugit, ea odit qui accusantium ullam repudiandae',
      img: '',
    },
  ];

  const offertList = [
    {
      title: 'Podstawowy',
      price: '200zł',
      text: 'Oferujemy Ci 1',
      cNameContent: 'left',
      cNameDesctiption: 'rightD',
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
      cNameContent: 'left',
      cNameDesctiption: 'rightD',
    },
  ];

  return (
    <>
      <Title titleText='nasze realizacje' />
      <div className='virtualTour-container'>
        {walkList.map((obj) => (
          <div key={obj.title} className='virtualTour-container__content'>
            <div className='imgWalk'></div>
            <div className='title'>Spacey {obj.title} </div>
            <div className='text'>{obj.text}</div>
            <div className='button'>
              <p>Zamów Spacer</p>
            </div>
          </div>
        ))}
      </div>
      {offertList.map((obj) => (
        <Offert
          key={obj.title}
          title={obj.title}
          price={obj.price}
          description={obj.text}
          cNameContent={obj.cNameContent}
          cNameDesctiption={obj.cNameDesctiption}
        />
      ))}
    </>
  );
};

export default VirtualTour;
