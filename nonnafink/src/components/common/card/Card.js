import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className='card-image' src={this.props.img?this.props.img:''}></img>
        <div className='container-card'>

          <h2 className='card-title'>{this.props.title}</h2>
          <p>{this.props.text}</p>
          <div className='card-buttons'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}



export default Card;