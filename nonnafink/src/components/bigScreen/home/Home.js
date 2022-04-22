
import React, { Component } from 'react';
import './Home.css';
import background from '../../../img/NONNAREGINAFINK-14-F.jpg';
import { MatomoContext, useMatomo } from '@datapunt/matomo-tracker-react';
import LandingNavigation from '../../common/landing_navigation/LandingNavigation';


const Home = () => {

  const { trackPageView, trackEvent } = useMatomo();

  // Track page view
  React.useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className='home'>
      <div className='navigation-container'>
        <LandingNavigation></LandingNavigation>
      </div>
      <h1 className='title'>Nonna Fink  <br></br>Schauspielerin</h1>
      <img src={background} alt='background'></img>

    </div>
  );

}

export default Home;