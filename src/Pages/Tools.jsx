import React, { Component } from 'react'
import './Tools.css';

export default class Tools extends Component {
  render() {
    return (
      <section className="section-tools">
        <div className="tools-page">
        <div>
          <h1 id="title-tools">Languages and Tools</h1>
        </div>
        <div id="img-tools">
        <img alt="Html5" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png" width="350" heigth="350" /><img alt="Redux-React" src="https://media.licdn.com/dms/image/C4E12AQElvDkXzTw85g/article-cover_image-shrink_720_1280/0/1615427806393?e=2147483647&v=beta&t=EJXnS8HTpBtI4L9AT18g6Phe23uEazSCvKrepSn2LMA" width="270" heigth="270" /><img alt="Node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="220" heigth="220" /><img alt="Jest" src="https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png" width="140" heigth="140" /><img alt="Rtl" src="https://testing-library.com/img/octopus-128x128.png" width="140" heigth="140" /><img alt="GitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="140" heigth="140" />
        </div>
        </div>
        <div className="footer-div-tools">
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
