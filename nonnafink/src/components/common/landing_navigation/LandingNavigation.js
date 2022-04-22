import React from 'react';
import './LandingNavigation.css'
import { NavLink } from "react-router-dom";

function LandingNavigation(props) {
  return (
    <div className='landing_navigation'>
      <ul>
        <li> <NavLink to="/biografie" activeClassName="selected">Biografie</NavLink></li>
        <li><NavLink to="/aktuelles" activeClassName="selected">Aktuelles</NavLink></li>
        <li><NavLink to="/galerie" activeClassName="selected">Galerie</NavLink></li>
        <li><a href="mailto:me@nonnafink.com">Kontakt</a></li>
      </ul>
    </div>
  );
}

export default LandingNavigation;