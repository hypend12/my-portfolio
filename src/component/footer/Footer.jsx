import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "../footer/Footer.css";



const Footer = () => {
  return (
    <footer >


 <ul className='permalinks'>
<li><a href='#'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#experience'>experience</a></li>
<li><a href='#portfolio'>portfolio</a></li>
<li><a href='#Contact'>contact</a></li>

 </ul>

<div className="footer__socials">
<a href="" ><AiFillLinkedin/></a>
<a href="" target="_blank" ><AiOutlineInstagram/></a>
</div>

<div className="footer__copyright">
  <small>&copy; PARTNER TECH. All rights reserved</small>
</div>
    </footer>
  )
}

export default Footer;