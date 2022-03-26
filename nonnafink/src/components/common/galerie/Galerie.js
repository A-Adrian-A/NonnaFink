import React, { Component } from 'react';
import './Galerie.css';
const imgages = [
  {
    id: 1,
    url: require('./img/1_small.jpg'),
  },
  {
    id: 2,
    url: require('./img/2_small.jpg'),
  },
  {
    id: 3,
    url: require('./img/3_small.jpg'),
  },
  {
    id: 4,
    url: require('./img/4_small.jpg'),
  },
  {
    id: 5,
    url: require('./img/5_small.jpg'),
  },
  {
    id: 6,
    url: require('./img/6_small.jpg'),
  },
  {
    id: 7,
    url: require('./img/7_small.jpg'),
  },
  {
    id: 8,
    url: require('./img/8_small.jpg'),
  },
  {
    id: 9,
    url: require('./img/10_small.jpg'),
  },
];

class Galerie extends Component {

  render() {
    return (
      <div className='galerie'>
        <h1 id='galerie-title'>Galerie</h1>
        <div class="row">
          <div class="column">
            <a href={imgages[0].url} target="_blank" rel="noreferrer">
              <img src={imgages[0].url} alt="Nonna"></img>
            </a>
            <a href={imgages[1].url} target="_blank" rel="noreferrer">
              <img src={imgages[1].url} alt="Nonna"></img>
            </a>
            <a href={imgages[2].url} target="_blank" rel="noreferrer">
              <img src={imgages[2].url} alt="Nonna"></img>
            </a>
          </div>
          <div class="column">
            <a href={imgages[3].url} target="_blank" rel="noreferrer">
              <img src={imgages[3].url} alt="Nonna"></img>
            </a>
            <a href={imgages[4].url} target="_blank" rel="noreferrer">
              <img src={imgages[4].url} alt="Nonna"></img>
            </a>
            <a href={imgages[1].url} target="_blank" rel="noreferrer">
              <img src={imgages[1].url} alt="Nonna"></img>
            </a>
          </div>
          <div class="column">
            <a href={imgages[6].url} target="_blank" rel="noreferrer">
              <img src={imgages[6].url} alt="Nonna"></img>
            </a>
            <a href={imgages[7].url} target="_blank" rel="noreferrer">
              <img src={imgages[7].url} alt="Nonna"></img>
            </a>
          </div>
          <div class="column">
            <a href={imgages[8].url} target="_blank" rel="noreferrer">
              <img src={imgages[8].url} alt="Nonna"></img>
            </a>
            <a href={imgages[5].url} target="_blank" rel="noreferrer">
              <img src={imgages[5].url} alt="Nonna"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie;