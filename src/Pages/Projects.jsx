import React, { Component } from 'react'
import './Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section className="section-projects">
        <div className="projects-page">
        <div className="box-project">
        <a target="blank" href="https://trybetunes-project-lucas-barbosa.vercel.app" className="link-projeto">
<img src="tela-trybetunes.png" width="580" alt="Tela Tryunfo" />
            </a>
            <p>
            Project using ReactRouter, language in JavaScript, the project consists of a simulation of a music site, where first you go through a login page with validation, after login the user is directed to the main page, where it is possible to carry out the search by your preferred artist, as well as bookmarking and editing your profile. To see more, visit the links below.
            </p>
            <div className="link-repositorio">
            <a target="blank" href="https://trybetunes-project-lucas-barbosa.vercel.app" className="link-projeto-card">Website Link</a>
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva/trybetunes-project" className="link-projeto-card">Repository Link</a>
            </div>
            
        </div>
        <div className="box-project">
        <a target="blank" href="https://github.com/LucasBarbosaDaSilva/react-testing-library-project" className="link-projeto">
<img src="tela-react-test.png" width="580" alt="Tela React Test" />
            </a>
            <p>
            Project using the React-Testing-Library, project consists of performing tests in a React application, several tests were carried out, using Mocks with Jest and Mocks of APIs using fetc To see more, visit the link below.
            </p>
            <div className="link-repositorio">
        
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva/react-testing-library-project" className="link-projeto-card">Repository Link</a>
            </div>
            
        </div>
        <div className="box-project">
        <a target="blank" href="https://tryunfo-project-lucas-barbosa.vercel.app" className="link-projeto">
<img src="tryunfo-tela.png" width="580" alt="Tela Tryunfo" />
            </a>
            <p>
            Project using React, language in JavaScript, the project consists of a card game, where a form was created to fill in the data of each card, going through the validation process of each item in order to save each card. To see more, visit the links below.
            </p>
            <div className="link-repositorio">
            <a target="blank" href="https://tryunfo-project-lucas-barbosa.vercel.app" className="link-projeto-card">Website Link</a>
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva/tryunfo-project" className="link-projeto-card">Repository Link</a>
            </div>
            
        </div>
        <div className="box-project">
        <a target="blank" href="https://solar-system-project-lucas-barbosa.vercel.app/" className="link-projeto">
<img src="solar-system-tela.png" width="580" alt="Tela Solar System" />
            </a>
            <p>
            First project using React, language in JavaScript, the project shows the planets of the solar system and all dated space missions, through the creation of components. To see more, visit the links below.
            </p>
            <div className="link-repositorio">
            <a target="blank" href="https://solar-system-project-lucas-barbosa.vercel.app/" className="link-projeto-card">Website Link</a>
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva/solar-system-project" className="link-projeto-card">Repository Link</a>
            </div>
            
        </div>
        <div className="box-project">
        <a target="blank" href="https://shopping-cart-project-lucas-barbosa.vercel.app" className="link-projeto">
<img src="tela-shopping-cart.png" width="580" alt="Tela Shopping Cart" />
            </a>
            <p>
            Shopping Cart is a project in JavaScript, HTML5 and css, simulating an e-commerce site using Mercado Livre's API, and DOM manipulation. To see more, visit the links below.
            </p>
            <div className="link-repositorio">
            <a target="blank" href="https://shopping-cart-project-lucas-barbosa.vercel.app" className="link-projeto-card">Website Link</a>
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva/shopping-cart-project" className="link-projeto-card">Repository Link</a>
            </div>
            
        </div>
        </div>
      <div className="box-final">

        <p id="final-paragraph">To see all my projects visit my GitHub:</p>
        <a target="blank" href="https://github.com/LucasBarbosaDaSilva" className="contact-link">
            <img alt="GitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="93" />
            </a>
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
}
