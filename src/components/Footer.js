import React from 'react';
import men1 from "../images/men1.png";
import men2 from "../images/men2.png";
import men3 from "../images/men3.png";

export default function Header() {

  return(
    <footer className="footer">
    <div className="footer__images">
      <img className="footer__img" src={men1} alt="Постоянный пользователь" />
      <img className="footer__img" src={men2} alt="Постоянный пользователь" />
      <img className="footer__img" src={men3} alt="Постоянный пользователь" />
      <div className="footer__img-plus "></div>
    </div>
    <p className="footer__text">45k+ Regular User.&nbsp;     
    <span className="footer__text_color_orange">   View Price Plan</span></p>
  </footer>
  )
}