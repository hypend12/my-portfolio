import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href="https://github.com/hypend12?tab=repositories" 
        target="_blank"><AiFillGithub/></a>
        <a href="" ><AiFillLinkedin/></a>
        <a href="" target="_blank" ><AiOutlineInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials;
