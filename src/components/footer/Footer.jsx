import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#" className="footer__logo">
            MBUNKUR
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="blank">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="blank">
            <FiInstagram />
          </a>
          
        </div>

        <div className="copyRight">
            <h3>@copyright BD 2023. All rights reserved</h3>
        </div>
      </div>
    );
}

export default Footer
