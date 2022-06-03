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
    <>
      <header>
      
        {props.isSmallScreen ? (<></>)
          : (<Navigation isClicked={props.isClicked}></Navigation>)}

      </header>
        <div onClick={() => handleBodyClick()} className="content">
          {props.children}
        </div>
      </>
  );
}


export default Skeleton;


