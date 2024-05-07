import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Joshua Castaneda</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ccastaneda85" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/christopher-castaneda-aa4812178/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:Christopherj.Castaneda@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/jcastaneda85/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer