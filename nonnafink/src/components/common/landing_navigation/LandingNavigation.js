import React from 'react';
import './LandingNavigation.css'


function LandingNavigation(props) {
  return (
    <div className='landing_navigation'>
      <ul>
        <li> <a href="#biografie" activeclassname="selected">Biografie</a></li>
        <li><a href="#aktuelles" activeclassname="selected">Aktuelles</a></li>
        <li><a href="#galerie" activeclassname="selected">Galerie</a></li>
        <li><a href="mailto:me@nonnafink.com">Kontakt</a></li>
      </ul>
    </div>
  );
}

export default LandingNavigation;