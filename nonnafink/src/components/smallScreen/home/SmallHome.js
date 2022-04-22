
import React, { Component } from 'react';
import './SmallHome.css';
import movie from '../../../mov/SDL_Showreel-SMALL.webm'
class SmallHome extends Component {
  render() {
    return (
      <div className="small-home">
        <h1 id="home-title">About me</h1>
        <p>Regina geborene Nonna Fink startet ihre Schauspielkarriere an der European Film Actor School in Zürich.<br></br><br></br>
          In der Serie "Die Rosenheim-Cops" war Nonna 2014 in 10 Folgen zu sehen. Im Jahr 2016 spielte sie als Paketbotin
          Anni Hoyer in
          den Episoden 2446 bis 2470 in der Telenovela Sturm der Liebe mit.</p>
        <video controls>
          <source src={movie} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div className='bubble-container' hidden>
          <a id="news" class="bubble" href="/aktuelles/index.html">
            <div>News</div>
          </a>
          <a id="about" class="bubble" href="/biografie/index.html">
            <div>About me</div>
          </a>
          <a id="contact" class="bubble" href="mailto:me@nonnafink.com">
            <div>Contact</div>
          </a>
          <div className='bottom-border'>

          </div>
        </div>
      </div>
    )
  }
}

export default SmallHome;