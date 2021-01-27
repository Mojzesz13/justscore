import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './Main.scss';
import Navbar from './Navbar/Navbar';
import LoadingPage from './LoadingPage/LoadingPage';
import VirtualTour from './VirtualTour/VirtualTour';
import VirtualIdentification from './VirtualIdentification/VirtualIdentification';
import Website from './Website/Website';

function Main() {
  const [logoColor, setLogoColor] = useState('brown');
  const [titleColor, setTitleColor] = useState('brown');
  const [burgerColor, setBurgerColor] = useState('brown');
  const [redirect, setRedirect] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 4470);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='main-container'>
      <LoadingPage />
      {/* <div
        className={
          redirect ? 'main-container__content show' : 'main-container__content '
        }
      > */}
      <div className='main-container__content show'>
        <Router>
          <Navbar
            logoColor={logoColor}
            titleColor={titleColor}
            burgerColor={burgerColor}
            setLogoColor={setLogoColor}
            setBurgerColor={setBurgerColor}
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
          />
          <Switch>
            <Route exact path='/'>
              <Header
                setLogoColor={setLogoColor}
                setTitleColor={setTitleColor}
                setBurgerColor={setBurgerColor}
                setShowNavbar={setShowNavbar}
              />
            </Route>
            <Route path='/projects' component={Projects} />
            <Route path='/website' component={Website} />
            <Route path='/virtualTour' component={VirtualTour} />
            <Route
              path='/virtualIdentification'
              component={VirtualIdentification}
            />
            <Route path='/aboutUs' component={AboutUs} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </div>
    </section>
  );
}

export default Main;
