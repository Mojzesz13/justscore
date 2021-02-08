import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './AboutUs.scss';
import Title from '../../common/title';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 335}px,${y / 8 - 130}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 5 + 150}px,0)`;

const AboutMe = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div className='about-us-container  '>
      <Title titleText='O nas' />
      <div
        className='container'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className='card1'
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className='card2'
          style={{ transform: props.xy.interpolate(trans2) }}
        >
          Czym sie zajmujemy
        </animated.div>
        <animated.div
          className='card3'
          style={{ transform: props.xy.interpolate(trans3) }}
        >
          Kim jesteśmy
        </animated.div>
        <animated.div
          className='card4'
          style={{ transform: props.xy.interpolate(trans4) }}
        >
          Dlaczego my
        </animated.div>
      </div>
    </div>
  );
};

export default AboutMe;
