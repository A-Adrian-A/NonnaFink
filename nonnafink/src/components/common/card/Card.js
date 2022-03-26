import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div>
      <div class="card">
        <div className='container-card'>
          <h2 className='card-title'>{this.props.title}</h2>
          <p>{this.props.text}</p>
          <div class='card-buttons'>
            {this.props.children}
          </div>
        </div>
      </div>
      </div>
    );
  }
}



export default Card;