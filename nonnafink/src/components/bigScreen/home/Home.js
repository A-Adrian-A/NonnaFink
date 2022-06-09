
import  { useEffect, useState } from 'react';
import './Home.css';
import background from '../../../img/1.jpg';
import background2 from '../../../img/6.jpg';
import {  useMatomo } from '@jonkoops/matomo-tracker-react';
import LandingNavigation from '../../common/landing_navigation/LandingNavigation';


const Home = (props) => {

  const { trackPageView } = useMatomo();
  const [isSmallScreen, setSmallScreen] = useState(false);


  // Track page view
  useEffect(() => {
    trackPageView();

    function updatePredicate() {
      setSmallScreen(
         window.innerWidth > 1200
      );
    }
    updatePredicate();
    window.addEventListener("resize", updatePredicate);
    return function cleanup() {
      window.removeEventListener("resize", updatePredicate);
    }
  }, [trackPageView]);

  return (
    <div className='home'>
      <div className='navigation-container'>
        <LandingNavigation></LandingNavigation>
      </div>
      <h1 className='title'>Nonna Fink <br></br>Schauspielerin</h1>
      <img src= {isSmallScreen ?   background  :  background2 } alt='background'></img>

    </div>
  );

}

export default Home;