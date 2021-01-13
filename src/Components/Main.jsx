import React from 'react';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './Main.scss';
import Navbar from './Navbar/Navbar';

// function Main() {
//   return (
//     <section className='main-container'>
//       <Navbar />
//       <div className='outer-wrapper'>
//         <div className='wrapper'>
//           <Header />
//           <AboutUs />
//           <Projects />
//           <Contact />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Main;

function Main() {
  return (
    <section className='main-container'>
      <Navbar />
      <Header />
    </section>
  );
}

export default Main;
