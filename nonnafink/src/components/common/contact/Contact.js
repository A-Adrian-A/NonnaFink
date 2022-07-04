
import React, { Component } from 'react';
import './Contact.css';
import Button from '../button/Button'

import { ReactComponent as InstagramIcon } from './icon/instagram.svg';


class Contact extends Component {
  render() {
    return (
      <div id="contact">
        
        <h1 className='title'>Kontakt</h1>
        <div className='text'>
          <Button link="mailto:me@nonnafink.com" text='Schreib eine Mail'>Mail &ensp;
            <div className="icon" id="email"> </div>
          </Button>
          <a href="https://www.instagram.com/nonnareginafink" target='_blank' rel='noreferrer'>
            <InstagramIcon className='instagram' fill='#d42150'></InstagramIcon>
          </a>

        </div>
      </div>
    );
  }
}

export default Contact;