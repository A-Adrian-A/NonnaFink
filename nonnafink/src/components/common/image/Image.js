import React, { Component } from 'react';
import './Image.css';


class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
    };
  }

  render(imges) {
    return (
      <a className='galerie-img' href={this.state.image.url_big} target="_blank" rel="noreferrer">
        <img src={this.state.image.url} alt="Nonna"></img>
        <div className='photographer'> &copy; {this.state.image.photographer}</div>
      </a>
    );
  }
}

export default Image;