import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <section className="section-contact">
        <div className="contact-page">
          <div className="contact-text">
          <h1 id="title-contact">CONTACT</h1>
          <p className="text-body-contact">If you liked something, have any curiosity or question, you can contact me by sending an email, or accessing my networks!</p>
          </div>
          <div className="links-contact">
          <a target="blank" href="mailto:lucasbarbosa.webdev@gmail.com" className="contact-link">
<img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png" width="100" alt="logo-gmail" />
            </a>
            <a target="blank" href="https://wa.me/5532988080152" className="contact-link">
<img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" width="100" alt="logo whats" />
            </a>
            <a target="blank" href="https://www.linkedin.com/in/lucasbarbosa123/" className="contact-link">
              <img src="https://johnatas-henrique.github.io/static/media/linkedinBlue.3d62fbab.png" width="93" alt="logo-linkedin" />
            </a>
            <a target="blank" href="https://github.com/LucasBarbosaDaSilva" className="contact-link">
            <img alt="GitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="93" />
            </a>
          </div>
        </div>
        <div className="footer-div-contact">
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
