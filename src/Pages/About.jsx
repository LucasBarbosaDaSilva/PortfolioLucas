import React, { Component } from 'react'

import './About.css';

export default class About extends Component {
  render() {
    return (
      <section className="section-about">
      <div className="about-page">
        <div>
    <img src="lucas-perfil.jpg" alt="perfil" className="perfil-img"/>
  </div>
        <div className="about-text">
        <h1 id="title-about">Hello Everybody!🖖</h1>
        <p className="text-body"> Web Development Student at Trybe, graduated in the Web Fundamentals block where I learned content such as: Unix & Bash, Git, Basic JS & DOM, HTML, CSS, JS ES6, Higher Order Functions and Unit Tests, as well as agile methodologies and behavioral skills .Currently student of Front-End Development with introduction to React.
Born in Juiz de Fora, a native of Minas Gerais with a carioca influence, doesn't dispense with a good bread cheese  and coffee 😋. Passionate about technology since childhood, i believe in teamwork, honest and impacting people's lives in a positive way ✌️. 
 A bit nerdy, a bit artist, and now a bit programmer!🫰🚀</p>
 <h2 id="subtitle">Some curiosities about me</h2>

<ul className="text-body">
  <li>With absolute certainty my favorite drink is coffee, it's the first thing I do when I wake up ☕</li>
  <li>I'm a black belt in Taekwondo, i was a professional athlete and competed in national and international championships 🥋 🏅</li>
  <li>One of my hobbies is music, I love listen and do music, and I have authorial work released on digital platforms 🪕</li>
  <li>During the faculty of human sciences, my study and research was focused on the Trans and Queer population 🏳️‍🌈 </li>
  <li>One of my favorite hobbies is watching movies and series, I think I can consider myself a cinephile and my favorite is Lord of the Rings 🎥 🧙</li>
  </ul>
  </div>
      </div>
      <div className="footer-div">
        <footer className="footer-text">
          <p className="footer-paragraph">
          To see more or get in contact visit my networks.
            </p>
            <a target="blank" href="https://www.linkedin.com/in/lucasbarbosa123/" className="footer-link">Linkedin</a>
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva" className="footer-link">GitHub</a>
        </footer>
      </div>
      </section>

    )
  }
};
