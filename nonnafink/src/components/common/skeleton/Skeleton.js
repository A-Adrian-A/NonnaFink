import React, { Component } from 'react';
import SmallNavigation from '../../smallScreen/smallnavigation/SmallNavigation';
import Navigation from '../../bigScreen/navigation/Navigation';


import './Skeleton.css'

class Skeleton extends Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: true };
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
  }

  handleBodyClick() {
    console.log(this.state.showMenu)
     this.setState(prevState => ({ 
       showMenu: true
      })); 
    }

    handleNavigationClick() {
      console.log(this.state.showMenu)
       this.setState(prevState => ({ 
         showMenu: !this.state.showMenu
        })); 
      }
    


  render() {
    return (
      <div>
        <header>
        {this.props.isSmallScreen ? (<Navigation></Navigation>):(<SmallNavigation showMenu={this.state.showMenu} handleClick={this.handleNavigationClick}></SmallNavigation>)}
        </header>
        <div  className="body">
        {this.props.isSmallScreen ? ( 
          <div className="logo">
            Nonna Fink
          </div>):(<></>)}
          <div onClick={()=>this.handleBodyClick()} className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Skeleton;


