import './App.css';
import Skeleton from './components/common//skeleton/Skeleton';
import Biografie from './components/common/biografie/Biografie';
import Home from './components/bigScreen/home/Home'
import SmallHome from './components/smallScreen/home/SmallHome'
import Aktuelles from './components/common//aktuelles/Aktuelles';
import Galerie from './components/common//galerie/Galerie'
import {  Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function App() {


  const location = useLocation();
  const is_homeScreen = location.pathname.localeCompare("/") === 0

  const isBigScreen = window.innerWidth > 1000;
  const isSmallScreen = window.innerWidth < 500;
  return (

    <div className="App">
      {is_homeScreen ? (<Home></Home>) : (
        <Skeleton isBigScreen={isBigScreen} isSmallScreen={isSmallScreen}>
          <Routes>
            <Route path="/" element={isBigScreen ? (<Home></Home>) : (<SmallHome></SmallHome>)}>
            </Route>
            <Route path="/biografie" element={<Biografie></Biografie>}></Route>
            <Route path="/draft" element={<Home></Home>}></Route>
            <Route path="/aktuelles" element={<Aktuelles isBigScreen={isBigScreen}></Aktuelles>}></Route>
            <Route path="/galerie" element={<Galerie></Galerie>}></Route>
          </Routes>
        </Skeleton>
      )}
    </div>
    );
}


export default App;
