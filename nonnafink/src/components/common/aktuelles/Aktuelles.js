
import React, { Component } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import './Aktuelles.css';

import card_img from '../../../img/theater/signal-2022-08-18-16-43-09-035.jpg'
import side_img from '../../../img/theater/linkes_Bild.jpg'
class Aktuelles extends Component {

  render() {
    
    return (
      <div id='aktuelles'>
       <h1 id='aktuelles-title'>Aktuelles</h1>
        <div className='fourtysixty'>
          {this.props.isBigScreen ? (

              <img id='aktuelles-img' src={side_img} alt="Nonna"></img>

         ):(<div></div>)}
          <div className="container-text">
           
            <div className='container-cards'>


            <Card img={card_img}
             title='Schlossfestspiele'
              text='Im Schloss Hagenwil wird als Freilicht Theater die Tragikomödie Amphitryon aufgeführt. Von Liebe bis Betrug
            und Identitätskrise werden in dem Stück viele immer noch aktuelle Themen aufgegriffen.'
            >
              <Button text='Event Daten' link='https://www.schlossfestspiele-hagenwil.ch/programm/amphitryon/#tickets_amphitryon'></Button>
              <Button text='Tickets' link='https://www.schlossfestspiele-hagenwil.ch/tickets/#abendtheater'></Button>
              <Button text='Weitere Infos' link='https://www.schlossfestspiele-hagenwil.ch/programm/amphitryon/#stueck'></Button>
              </Card>

              <Card title='Dinner Event'
              text='Haben Sie Lust einen Krimi zu lösen. Dazu dinnieren Sie an einem schönen Ort. Verschiedene Events von Mafia
            Dinner bis zu Grusel Dinner werden mitreisend in Szene gesetzt.'
            >
              <Button text='Event Daten' link='https://rexer.ch/eventdaten/'></Button>
              <Button text='Tickets' link='https://rexer.ch/eventdaten/'></Button>
              <Button text='Weitere Infos' link='https://rexer.ch/dinnerevents/'></Button>
            </Card>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aktuelles;