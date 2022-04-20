
import React, { Component } from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBigScreen: false 
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isBigScreen: window.innerWidth > 680 });
  }
  render() {
    return (
      <nav className='navigation'>
        <ul>
          <NavLink to="/biografie" activeClassName="selected">Biografie</NavLink>
          <NavLink to="/aktuelles" activeClassName="selected">Aktuelles</NavLink>
          <NavLink to="/galerie" activeClassName="selected">Galerie</NavLink>
          {this.state.isBigScreen?( <li><a href="mailto:me@nonnafink.com">Kontakt &ensp;
            <div class="icon" id="email"> </div>
          </a>
            <a href="https://www.instagram.com/nonnareginafink" target='_blank' rel='noreferrer'>
              <div class="icon" id="instagram"></div>
            </a>
          </li>):(<li><a href="mailto:me@nonnafink.com">Kontakt</a></li>)}
        </ul>
      </nav>
    );
  }
}

export default Navigation;

