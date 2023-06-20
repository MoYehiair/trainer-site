import React from "react";
import "./Footer.css";
import logo from "../../assets/logo1.svg";
import whatsapp from "../../assets/whatsapp (1).png";
import instgram from "../../assets/instagram-1.png";
import facebook from "../../assets/facebook (2).png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">Contact me</div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-2"></div>
      <div className="icons">
        <a
          href="https://www.facebook.com/mahmoudmorsyyy"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          href="https://www.instagram.com/coach_morsy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instgram} alt="" />
        </a>
        <a href="https://wa.me/201017053245">
          <img src={whatsapp} alt="" />
        </a>
      </div>
      <div>
        <img className="main-logo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
