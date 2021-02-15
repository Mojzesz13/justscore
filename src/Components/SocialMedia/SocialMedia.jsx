import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import './SocialMedia.scss';
import Title from '../../common/title';
import Logo from '../../common/logo';
import img1 from '../../assets/offert1.jpg';
import img2 from '../../assets/offert2.jpg';
import img3 from '../../assets/offert3.jpg';
import img4 from '../../assets/offert4.jpg';

const SocialMedia = () => {
  const [isFirstHovered, setIsFirstHovered] = useState(false);

  const handleOnMouseEnterFirstBg = () => {
    setIsFirstHovered(true);
  };

  const handleOnMouseLeaveFirstBg = () => {
    setIsFirstHovered(false);
  };

  const offertsList = [
    {
      bgImage: img1,
      title: 'COMPACT',
      offert: '5 postów/mc',
      price: '750zł',
      onEnter: handleOnMouseEnterFirstBg,
      onLeave: handleOnMouseLeaveFirstBg,
    },
    {
      bgImage: img2,
      title: 'OPTIMAL',
      offert: '9 postów/mc',
      price: '1450zł',
    },
    {
      bgImage: img3,
      title: 'EKSPERT',
      offert: '11 postów/mc',
      price: '1650zł',
    },
    {
      bgImage: img4,
      title: null,
      offert: null,
      price: null,
      text:
        'W ramach obsługi znajduje się także budżet reklamowy (200zł/mc), który przeznaczamy na zwiększenie świadomości marki i zwiększenie liczby fanów na profilu marki poprzez reklamy na Facebooku. Przy budżecie miesięcznym 200zł jesteśmy w stanie potencjalnie dotrzeć dziennie od 1700 do 5000 osób. Przy zwiększeniu budżetu do 500zł/mc możemy uzyskać zasięg dzienny od 4300 do 12000 osób. Jeśli Klient ma taką wolę/chęć może przeznaczyć na promocję dodatkowy budżet reklamowy np. 500 zł miesięcznie bądź jednorazowo. Za obsługę kampanii z dodatkowego budżetu JUST SCORE pobiera 20% wartości kampanii (tu: 100 zł).',
    },
  ];

  return (
    <>
      <Title titleText='social media' style={{ textAlign: 'center' }} />
      <div className='container-social-media'>
        {offertsList.map((offert) => (
          <>
            <Parallax bgImage={offert.bgImage} strength={250}>
              <div className='container-social-media__content-holder'>
                <div className='container-social-media__owhite-bg' />
                <div className='container-social-media__offert-container'>
                  <div className='container-social-media__offert'>
                    <ul>
                      <li>{offert.title}</li>
                      <li>{offert.offert}</li>
                      <li>{offert.price}</li>
                    </ul>
                    {offert.text ? (
                      <div className='container-social-media__text'>
                        {offert.text}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Parallax>
            <div className='container-social-media__logo-container'>
              <Logo />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
