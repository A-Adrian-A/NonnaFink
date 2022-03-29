import './App.css';
import Skeleton from './components/common//skeleton/Skeleton';
import Biografie from './components/common/biografie/Biografie';
import Home from './components/bigScreen/home/Home'
import SmallHome from './components/smallScreen/home/SmallHome'
import Aktuelles from './components/common//aktuelles/Aktuelles';
import Galerie from './components/common//galerie/Galerie'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false 
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
    this.setState({ isBigScreen: window.innerWidth > 1000 });
    this.setState({ isSmallScreen: window.innerWidth > 500 });
  }

  render() {
    const isBigScreen = this.state.isBigScreen;
    const isSmallScreen = this.state.isSmallScreen;
    return (
      <BrowserRouter>
        <div className="App">
          <Skeleton isBigScreen={isBigScreen} isSmallScreen={isSmallScreen}>
            <Routes>
              <Route path="/" element={isBigScreen ?(<Home></Home>):(<SmallHome></SmallHome>)}>
              </Route>
              <Route path="/biografie" element={<Biografie></Biografie>}></Route>
              <Route path="/aktuelles" element={<Aktuelles isBigScreen={isBigScreen}></Aktuelles>}></Route>
              <Route path="/galerie" element={<Galerie></Galerie>}></Route>
            </Routes>

          </Skeleton>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
