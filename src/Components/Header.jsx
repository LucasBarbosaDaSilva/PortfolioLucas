import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="header-portfolio-lucas.png" alt="header" className="header-img"/>
        <div  className="links-header">
          <div>
            <Link to="/" className="link-page-header">About Me</Link>
          </div>
          <div>
            <Link to="/projects" className="link-page-header">Projects</Link>
          </div>
          <div>
            <Link to="/tools" className="link-page-header">Tools</Link>
          </div>
          <div>
            <Link to="/contact" className="link-page-header">Contact</Link>
          </div>
        </div>
      </header>
    );
  }
}
