import React from "react";
import "./About.css";
import Me from "../images/me1.png";
import { BsAward } from "react-icons/bs"; 
import { DiReact} from "react-icons/di";
import { GoTasklist } from "react-icons/go";


const About = () => {
  return (
    <section id="about">
      <h2>skills and projects</h2>

      <div className=" container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
             {/* experience   */}
            <article className="about__card">
              <BsAward className="about__icon"/>
              <h5>Experience</h5>
              <small>coding knowledge 2 years+</small>
            </article>
          {/* language and frameworks   */}
            <article className="about__card cards">
              <DiReact className="about__icon"/>
              <h5>language/frameworks</h5>
              <small>HTML/CSS/jQuery/React/ 
                PHP/postgreSQL/WORDPRESS
              </small>
            </article>
               {/* projects   */}
            <article className="about__card">
              <GoTasklist className="about__icon"/>
              <h5>projects</h5>
              <small>front end and full stack projects completed</small>
            </article>
          </div>
          <p>
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default About;
