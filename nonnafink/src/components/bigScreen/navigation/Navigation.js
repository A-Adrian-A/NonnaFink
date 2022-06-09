
import React from 'react';
import './Navigation.css'




function Navigation(props) {




  return (
    <nav className='navigation'>
      <ul>
        <a href="#biografie" activeClassName="selected">Biografie</a>
        <a href="#aktuelles" activeClassName="selected">Aktuelles</a>
        <a href="#galerie" activeClassName="selected">Galerie</a>
        <li><a href="mailto:me@nonnafink.com">Kontakt &ensp;
          <div className="icon" id="email"> </div>
        </a>
          <a href="https://www.instagram.com/nonnareginafink" target='_blank' rel='noreferrer'>
            <div className="icon" id="instagram"></div>
          </a>
        </li>
      </ul>
    </nav>
  );
}


export default Navigation;

