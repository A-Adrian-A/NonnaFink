import React, { useState } from 'react';



import './Skeleton.css'

function Skeleton(props) {
  const [showMenu, setShowMenu] = useState(true);



  const handleBodyClick = () => {
    setShowMenu(!showMenu)
  }



  return (
    <>

      <div onClick={() => handleBodyClick()} className="content">
        {props.children}
      </div>
    </>
  );
}


export default Skeleton;


