import React, { Component, useState } from 'react';
import SmallNavigation from '../../smallScreen/smallnavigation/SmallNavigation';
import Navigation from '../../bigScreen/navigation/Navigation';
import { useLocation } from 'react-router-dom';


import './Skeleton.css'

function Skeleton(props) {
  const [showMenu, setShowMenu] = useState(true);



  const handleBodyClick = () => {
    setShowMenu(!showMenu)
  }

  const handleNavigationClick = () => {
    setShowMenu(!showMenu)
  }


 
  return (
    <div>
      <header>
      
        {props.isSmallScreen ? (<SmallNavigation showMenu={showMenu} handleClick={handleNavigationClick}></SmallNavigation>)
          : (<Navigation></Navigation>)}

      </header>
      <div className="body">
        {props.isSmallScreen  ? 
        (<></>):(
          <div className="logo">
            Nonna Fink
          </div>)  }
        <div onClick={() => handleBodyClick()} className="content">
          {props.children}
        </div>
      </div>
    </div>
  );
}


export default Skeleton;


