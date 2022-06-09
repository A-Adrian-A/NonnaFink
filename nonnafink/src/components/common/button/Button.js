import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
  render() {
    return (
      <a className='button' href={this.props.link} target='_blank' rel='noreferrer'>
        {this.props.text}
      </a>
    );
  }
}

export default Button;