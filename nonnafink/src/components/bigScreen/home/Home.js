
import  { useEffect } from 'react';
import './Home.css';
import background from '../../../img/NONNAREGINAFINK-14-F.jpg';
import {  useMatomo } from '@jonkoops/matomo-tracker-react';
import LandingNavigation from '../../common/landing_navigation/LandingNavigation';


const Home = () => {

  const { trackPageView } = useMatomo();

  // Track page view
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  return (
    <div className='home'>
      <div className='navigation-container'>
        <LandingNavigation></LandingNavigation>
      </div>
      <h1 className='title'>Nonna Fink <br></br>Schauspielerin</h1>
      <img src={background} alt='background'></img>

    </div>
  );

}

export default Home;