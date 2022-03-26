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
      isDesktop: false //This is where I am having problems
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
    this.setState({ isDesktop: window.innerWidth > 1000 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <BrowserRouter>
        <div className="App">
          <Skeleton isDesktop={isDesktop}>
            <Routes>
              <Route path="/" element={isDesktop ?(<Home></Home>):(<SmallHome></SmallHome>)}>
              </Route>
              <Route path="/biografie" element={<Biografie></Biografie>}></Route>
              <Route path="/aktuelles" element={<Aktuelles isDesktop={isDesktop}></Aktuelles>}></Route>
              <Route path="/galerie" element={<Galerie></Galerie>}></Route>
            </Routes>

          </Skeleton>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
