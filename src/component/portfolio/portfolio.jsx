import React from 'react';
import ProjectImg2 from '../images/projects/snapchat-clone.png';
import ProjectImg4 from '../images/projects/ecom2.png';
import '../portfolio/portfolio.css'
import fastfood from '../images/projects/fastfood.png';
import jewelry from '../images/projects/jewelry.png';

import galaxyIMG from '../images/projects/GLX-TRVL.png';


const portfolio = () => {
  return (
    <section id="portfolio" >
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

  <div className="container portfolio__container">

   {/* project 1*/}
    <article className='portfolio__item' >
  <div className="portfolio__item-image">
    <img src={ProjectImg2} alt="" />
  </div>
  <h3>Snapchat clone</h3>
  <h3>stack: React.js</h3>
  <div className="portfolio__item-cta"> 
  <a href="https://luxury-faun-08fac0.netlify.app/" className='btn' target="_blank" rel="noopener noreferrer">Snapchat clone</a>
  <a href="https://github.com/hypend12/snapchat-clone-project" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Github</a>
  </div>
    </article>

      {/* project 2*/}
      <article className='portfolio__item' >
  <div className="portfolio__item-image">
    <img src={ProjectImg4} alt="" />
  </div>
  <h3>Ecommerce site</h3>
  <h3>stack: html, css, vanilla javascript</h3>
  <div className="portfolio__item-cta"> 
  <a href="https://superb-lollipop-835571.netlify.app/" className='btn' target="_blank" rel="noopener noreferrer" >Ecommerce site</a>
  <a href="https://github.com/hypend12/HTML-CSS-JS-ecommerce" className='btn btn-primary' target="_blank" rel="noopener noreferrer" >Github</a>
  </div>
    </article>
          {/* project 3*/}
          <article className='portfolio__item' >
  <div className="portfolio__item-image">
    <img src={galaxyIMG} alt="" />
  </div>
  <h3>MY REACT PORTFOLIO</h3>
  <h3>stack: react.js</h3>
  <div className="portfolio__item-cta"> 
  <a href="https://classy-capybara-d1e768.netlify.app/" className='btn' target="_blank" rel="noopener noreferrer" >REACT PORTFOLIO</a>
  <a href="https://github.com/hypend12/fastfood" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Github-code</a>
  </div>
    </article>



 {/* project 4*/}
 <article className='portfolio__item' >
  <div className="portfolio__item-image">
    <img src={fastfood} alt="" />
  </div>
  <h3> Ecommerce site</h3>
  <h3>stack: html, css</h3>
  <div className="portfolio__item-cta"> 
  <a href="https://steady-arithmetic-c37430.netlify.app/" className='btn' rel="noopener noreferrer" target="_blank">custom jewelry store theme</a>
  <a href="https://github.com/hypend12/jewelry-store-theme" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Github-code</a>
  </div>
    </article>



        {/* project 5*/}
        <article className='portfolio__item' >
  <div className="portfolio__item-image">
    <img src={jewelry} alt="" />
  </div>
  <h3>jewelry store theme</h3>
  <div className="portfolio__item-cta"> 
  <a href="https://steady-arithmetic-c37430.netlify.app/" className='btn' target="_blank" rel="noopener noreferrer" >jewelry store theme</a>
  <a href="" className='btn btn-primary' target="_blank" rel="noopener noreferrer" >Github-code</a>
  </div>
    </article>
  </div>
  </section>
  )
}

export default portfolio;