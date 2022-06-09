
import React, { Component } from 'react';
import './SmallNavigation.css'
import { NavLink } from "react-router-dom";
class SmallNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: props };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="small-navigation">
        <nav className='static' >
          <div className='nav-circle2' onClick={this.handleClick} hidden={this.props.showMenu} ></div>
          <div className='nav-circle1' onClick={this.handleClick} hidden={this.props.showMenu} ></div>
          <div className='nav-logo' onClick={this.handleClick}>
            <div classname='nav-left'>
              <div className='logo-text' onClick={this.handleClick.bind(this)} >Nonna Fink</div>
              <ul hidden={this.props.showMenu} >
                <li>
                  <NavLink to="/biografie" activeClassName="selected">Biografie</NavLink>
                </li>
                <li>
                  <NavLink to="/aktuelles" activeClassName="selected">Aktuelles</NavLink>
                </li>
                <li>
                  <NavLink to="/galerie" activeClassName="selected">Galerie</NavLink>
                </li>
                <li><a href="mailto:me@nonnafink.com">Kontakt &ensp;
                </a>
                </li>
              </ul>
            </div>
            {this.props.showMenu ? (<div className="icon" id="menu" ></div>) : (<></>)}
          </div>
        </nav>
      </div>
    );
  }
}

export default SmallNavigation;

