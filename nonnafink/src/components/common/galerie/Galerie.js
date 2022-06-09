import React, { Component } from 'react';
import './Galerie.css';
import Image from './../image/Image'

const images = [
  {
    id: 1,
    url: require('../../../img/1-SMALL.jpg'),
    url_big: require('../../../img/1.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 2,
    url: require('../../../img/2-SMALL.jpg'),
    url_big: require('../../../img/2.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 3,
    url: require('../../../img/3-SMALL.jpg'),
    url_big: require('../../../img/3.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 4,
    url: require('../../../img/4-SMALL.jpg'),
    url_big: require('../../../img/4.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 5,
    url: require('../../../img/5-SMALL.jpg'),
    url_big: require('../../../img/5.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 6,
    url: require('../../../img/6-SMALL.jpg'),
    url_big: require('../../../img/6.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 7,
    url: require('../../../img/7-SMALL.jpg'),
    url_big: require('../../../img/7.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 8,
    url: require('../../../img/8-SMALL.jpg'),
    url_big: require('../../../img/8.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 9,
    url: require('../../../img/10-SMALL.jpg'),
    url_big: require('../../../img/10.jpg'),
    photographer: "Janine Guldener",
  },
  {
    id: 10,
    url: require('../../../img/NONNAREGINAFINK-01-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-01-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 11,
    url: require('../../../img/NONNAREGINAFINK-02-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-02-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 12,
    url: require('../../../img/NONNAREGINAFINK-03-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-03-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 13,
    url: require('../../../img/NONNAREGINAFINK-04-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-04-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 14,
    url: require('../../../img/NONNAREGINAFINK-05-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-05-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 15,
    url: require('../../../img/NONNAREGINAFINK-06-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-06-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 16,
    url: require('../../../img/NONNAREGINAFINK-07-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-07-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 17,
    url: require('../../../img/NONNAREGINAFINK-08-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-08-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 18,
    url: require('../../../img/NONNAREGINAFINK-09-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-09-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 19,
    url: require('../../../img/NONNAREGINAFINK-10-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-10-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 20,
    url: require('../../../img/NONNAREGINAFINK-11-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-11-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 21,
    url: require('../../../img/NONNAREGINAFINK-12-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-12-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 22,
    url: require('../../../img/NONNAREGINAFINK-13-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-13-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 23,
    url: require('../../../img/NONNAREGINAFINK-14-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-14-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 24,
    url: require('../../../img/NONNAREGINAFINK-15-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-15-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 25,
    url: require('../../../img/NONNAREGINAFINK-05-BW-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-05-BW-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 26,
    url: require('../../../img/NONNAREGINAFINK-08-BW-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-08-BW-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 27,
    url: require('../../../img/NONNAREGINAFINK-11-BW-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-11-BW-F.jpg'),
    photographer: "Einbrandfotos",
  },
  {
    id: 28,
    url: require('../../../img/NONNAREGINAFINK-15-BW-F-SMALL.jpg'),
    url_big: require('../../../img/NONNAREGINAFINK-15-BW-F.jpg'),
    photographer: "Einbrandfotos",
  },
];

const movies = [
  {
    id: 1,
    url: require('../../../mov/Schwesternliebe-SMALL.mp4'),
  },
  {
    id: 2,
    url: require('../../../mov/Die_Kommissarin-SMALL.mp4'),
  },
  {
    id: 3,
    url: require('../../../mov/SDL_Showreel-SMALL.mp4'),
  }
];

class Galerie extends Component {

  render() {
    return (
      <div id='galerie'>
        <h1 id='galerie-title'>Galerie</h1>
        <div className="row">
          <div className="column">
            <Image image={images[0]} ></Image>
            <Image image={images[2]} ></Image>
            <Image image={images[8]} ></Image>
            <Image image={images[12]} ></Image>
            <Image image={images[4]} ></Image>
            <video controls>
              <source src={movies[2].url} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
            <Image image={images[14]} ></Image>
            <Image image={images[25]} ></Image>
          </div>
          <div className="column">
            <Image image={images[13]} ></Image>
            <Image image={images[26]} ></Image>
            <Image image={images[16]} ></Image>
            <Image image={images[17]} ></Image>
            <Image image={images[21]} ></Image>
            <Image image={images[23]} ></Image>
            <video controls>
              <source src={movies[1].url} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
            <Image image={images[1]} ></Image>
          </div>
          <div className="column">
            <Image image={images[6]} ></Image>
            <video controls>
              <source src={movies[0].url} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
            <Image image={images[20]} ></Image>
            <Image image={images[9]} ></Image>
            <Image image={images[27]} ></Image>

            <Image image={images[22]} ></Image>
            <Image image={images[19]} ></Image>
          </div>
          <div className="column">
            <Image image={images[18]} ></Image>
            <Image image={images[7]} ></Image>
            <Image image={images[23]} ></Image>
            <Image image={images[15]} ></Image>
            <Image image={images[5]} ></Image>
            <Image image={images[10]} ></Image>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie;