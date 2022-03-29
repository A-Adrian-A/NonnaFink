
import React, { Component } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import './Aktuelles.css';
import Bild from './img/Nonna2.jpg'
class Aktuelles extends Component {

  render() {
    
    return (
      <div className='aktuelles'>
        <div className='fourtysixty'>
          <div className="container-text">
            <h1 id='aktuelles-title'>Aktuelles</h1>
            <Card title='Dinner Event'
              text='Haben Sie Lust einen Krimi zu lösen. Dazu dinnieren Sie an eimem schönen Ort. Verschiedene Events von Mafia
            Dinner bis zu Grusel Dinner werden mitreisend in Szene gesetzt.'
            >
              <Button text='Event Daten' link='https://rexer.ch/eventdaten/'></Button>
              <Button text='Tickets' link='https://rexer.ch/eventdaten/'></Button>
              <Button text='Weitere Infos' link='https://rexer.ch/dinnerevents/'></Button>
            </Card>

            <Card title='Schlossfestspiele'
              text='Im Schloss Hagenwil wird als Freilicht Theater die Tragikomödie Amphitryon aufgeführt. Von Liebe bis Betrug
            und Identitätskrise werden in dem Stück viele immer noch aktuelle Themen aufgegriffen.'
            >
              <Button text='Event Daten' link='https://www.schlossfestspiele-hagenwil.ch/programm/amphitryon/#tickets_amphitryon'></Button>
              <Button text='Tickets' link='https://www.schlossfestspiele-hagenwil.ch/tickets/#abendtheater'></Button>
              <Button text='Weitere Infos' link='https://www.schlossfestspiele-hagenwil.ch/programm/amphitryon/#stueck'></Button>
            </Card>

          </div>
          <div>
          {this.props.isBigScreen ? (<div className="container-image">
            <div class="central-overflow">
              <img id='aktuelles-img' src={Bild} alt="Nonna"></img>
            </div>
          </div>):(<div></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Aktuelles;