import './App.css';
import Skeleton from './components/common//skeleton/Skeleton';
import Biografie from './components/common/biografie/Biografie';
import Home from './components/bigScreen/home/Home'
import Aktuelles from './components/common//aktuelles/Aktuelles';
import Galerie from './components/common//galerie/Galerie'
import Contact from './components/common/contact/Contact'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {


  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const is_homeScreen = displayLocation.pathname.localeCompare("/") === 0
  const isBigScreen = window.innerWidth > 1000;
  const isSmallScreen = window.innerWidth < 500;



  useEffect(() => {
    if (is_homeScreen) {
      setTransistionStage("fadeIn_landing")
    }
    if (location !== displayLocation) {
      setDisplayLocation(location);
      if (is_homeScreen) {
        setTransistionStage("fadeIn")
      }
    }

  }, [location, is_homeScreen, displayLocation, transitionStage]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <div className="App">
        <Home isSmallScreen={isSmallScreen} ></Home>
        <Biografie ></Biografie>
        <Aktuelles isBigScreen={isBigScreen}></Aktuelles>
        <Contact></Contact>
        <Galerie></Galerie>
      </div>
    </div>
  );
}

export default App;
