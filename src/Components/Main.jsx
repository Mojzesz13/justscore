import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './Main.scss';
import Navbar from './Navbar/Navbar';
import LoadingPage from './LoadingPage/LoadingPage';

function Main() {
  const [logoColor, setLogoColor] = useState('brown');
  const [titleColor, setTitleColor] = useState('brown');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 4470);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='main-container'>
      <LoadingPage />
      <div
        className={
          redirect ? 'main-container__content show' : 'main-container__content '
        }
      >
        <Navbar logoColor={logoColor} titleColor={titleColor} />
        <Header setLogoColor={setLogoColor} setTitleColor={setTitleColor} />
      </div>
    </section>
  );
}

export default Main;
