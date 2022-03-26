
import React, { Component } from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <nav className='navigation'>
        <ul>
          <NavLink to="/" activeClassName="selected">Home</NavLink>
          <NavLink to="/biografie" activeClassName="selected">Biografie</NavLink>
          <NavLink to="/aktuelles" activeClassName="selected">Aktuelles</NavLink>
          <NavLink to="/galerie" activeClassName="selected">Galerie</NavLink>
          <li><a href="mailto:me@nonnafink.com">Kontakt &ensp;
            <div class="icon" id="email"> </div>
          </a>
            <a href="https://www.instagram.com/nonnareginafink" target='_blank' rel='noreferrer'>
              <div class="icon" id="instagram"></div>
            </a>
            <a href="https://ch.linkedin.com/in/regina-fink-99073756" target='_blank' rel='noreferrer'>
              <div class="icon" id="linkedin"></div>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

