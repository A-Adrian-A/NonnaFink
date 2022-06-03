import './App.css';
import Skeleton from './components/common//skeleton/Skeleton';
import Biografie from './components/common/biografie/Biografie';
import Home from './components/bigScreen/home/Home'
import SmallHome from './components/smallScreen/home/SmallHome'
import Aktuelles from './components/common//aktuelles/Aktuelles';
import Galerie from './components/common//galerie/Galerie'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {


  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("");
  const [clicked, isClicked] = useState(false);
  const is_homeScreen = displayLocation.pathname.localeCompare("/") === 0
  const isBigScreen = window.innerWidth > 1000;
  const isSmallScreen = window.innerWidth < 500;



  console.log("load Component " + transitionStage);
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

    console.log("useEffect " + transitionStage);
  }, [location, is_homeScreen, displayLocation, transitionStage]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        console.log("onAnimationEnd " + transitionStage)
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <div className="App">
        <Home isClicke={isClicked}></Home>
        <Skeleton isSmallScreen={isSmallScreen}>
          <div>
            <Biografie ></Biografie>
            <Aktuelles isBigScreen={isBigScreen}></Aktuelles>
            <Galerie></Galerie>
          </div>
        </Skeleton>

      </div>
    </div>
  );
}


export default App;
