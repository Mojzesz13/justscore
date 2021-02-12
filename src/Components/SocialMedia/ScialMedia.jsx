import React  from 'react';
import Title from '../../common/title';
import { Parallax } from 'react-parallax';
import img1 from '../../assets/offert1.jpg';
import img2 from '../../assets/offert2.jpg';

const inlineStyle = {
  background: '#fff',
  position: 'absolute',
  top: '46.5%',
  left: '46.5%',
  padding: '1.5rem',
};

const bgStyle1 = { backgroundPosition: 'bottom' };

const SocialMedia = () => {
  return (
    <>
      <Title titleText='social media' style={{ textAlign: 'center' }} />
      <div className='container'>
        <Parallax bgImage={img1} style={bgStyle1} strength={250}>
          <div style={{ height: 600 }}>
            <div style={inlineStyle}> Oferta 1 </div>
          </div>
        </Parallax>
        <h1 style={{ fontSize: '3rem' }}> ||| </h1>
        <Parallax bgImage={img2} blur={{ min: -5, max: 6 }}>
          <div style={{ height: 600 }}>
            <div style={inlineStyle}> Oferta 1 </div>
          </div>
        </Parallax>
        <div style={{ height: '100vh' }}></div>
      </div>
    </>
  );
};

export default SocialMedia;
