
import React, { Component } from 'react';
import './Biografie.css';
import Bild from './img/Nonna3.jpg';
class Biografie extends Component {
  render() {
    return (
      <div id="biografie">

        <div className='fiftyfifty'>
          <div>
          <h1 id='bio-title'>Biografie</h1>
        <div className="container-text">
          <div id='bio-text'>
          <p >Nonna Fink wurde 1989 im ländlichen Sibirien geboren.
            In ihrem Dorf herrschten Temperaturen von -40°C bis +40°C.
            Dies spiegelt sich in ihrem Temperament wieder.<br></br>

            Sie schloss ihre Schauspielausbildung im Jahre 2010 an der European Film Actor School (EFAS) in Zürich ab.
            Seitdem arbeitet Sie sowohl auf der Bühne als auch vor der Kamera.
              Sie spricht fliessend Deutsch, Russisch und Schweizerdeutsch.</p>
          </div>
            </div>
          </div>
        <div className="container-image">
          <img id="bio-image" src={Bild} alt="Nonna"></img>
        </div>
        </div>
      </div>
    );
  }
}

export default Biografie;