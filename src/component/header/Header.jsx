import React from "react";
import Cta from "../cta/Cta";
import HeaderSocials from "../header-social/HeaderSocials";
import Me from "../images/me2.png";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h3>Dawayne Dacosta</h3>
        <h3>A</h3>
        <h5 className="text-light">junior full stack programmer</h5>
        <h5 className="text-light">HTML/CSS/jQuery/React/ 
                PHP/postgreSQL/WORDPRESS</h5>
        
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className="scroll__down"></a>
      </div>
    </header>
  );
};

export default Header;
