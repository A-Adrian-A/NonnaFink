import './App.css';
import Skeleton from './components/common//skeleton/Skeleton';
import Biografie from './components/common/biografie/Biografie';
import Home from './components/bigScreen/home/Home'
import SmallHome from './components/smallScreen/home/SmallHome'
import Aktuelles from './components/common//aktuelles/Aktuelles';
import Galerie from './components/common//galerie/Galerie'
import {  Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState ,useEffect } from 'react';


function App() {


  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("");
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
      
    console.log("useEffect "+ transitionStage);
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
      {is_homeScreen ? (<Home></Home>) : (
        <Skeleton isBigScreen={isBigScreen} isSmallScreen={isSmallScreen}>
          <Routes location={displayLocation}>
            <Route path="/" element={isBigScreen ? (<Home></Home>) : (<SmallHome></SmallHome>)}>
            </Route>
            <Route path="/biografie" element={<Biografie></Biografie>}></Route>
            <Route path="/draft" element={<Home></Home>}></Route>
            <Route path="/aktuelles" element={<Aktuelles isBigScreen={isBigScreen}></Aktuelles>}></Route>
            <Route path="/galerie" element={<Galerie></Galerie>}></Route>
          </Routes>
        </Skeleton>
      )}
      </div>
    </div>
    );
}


export default App;
