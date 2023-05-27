import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Services from './component/services/Service';
import Portfolio from './component/portfolio/portfolio';
import Testimonial from './component/testimonial/testimonial';
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Cta from "./component/cta/Cta"




function App() {
  return (
    <>
<Header />

<Nav />
<About />
<Experience />
{/*<Services /> */}
<Portfolio />
{/*<Testimonial /> */}

<Footer />

    
    </>
  );
}

export default App;
