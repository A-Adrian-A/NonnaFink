
import React from 'react';
import './Navigation.css'

import { useEffect, useState } from 'react';


function Navigation(props) {

  const [isBigScreen,setBigScreen] = useState(false);

  useEffect(() => {
    function updatePredicate() {
      setBigScreen({ isBigScreen: window.innerWidth > 680 });
    }
    updatePredicate();
    window.addEventListener("resize", updatePredicate);
    return function cleanup() {
      window.removeEventListener("resize", updatePredicate);
    }
  });

  
  return (
    <nav className='navigation'>
      <ul>
        <a  href="#biografie" activeClassName="selected">Biografie</a>
        <a href="#aktuelles" activeClassName="selected">Aktuelles</a>
        <a href="#galerie" activeClassName="selected">Galerie</a>
        {isBigScreen ? (<li><a href="mailto:me@nonnafink.com">Kontakt &ensp;
          <div class="icon" id="email"> </div>
        </a>
          <a href="https://www.instagram.com/nonnareginafink" target='_blank' rel='noreferrer'>
            <div class="icon" id="instagram"></div>
          </a>
        </li>) : (<li><a href="mailto:me@nonnafink.com">Kontakt</a></li>)}
      </ul>
    </nav>
  );
}


export default Navigation;

