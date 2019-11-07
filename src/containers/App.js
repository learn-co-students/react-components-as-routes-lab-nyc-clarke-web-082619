import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <div>
    
    <Router>
      <div>
      <NavBar />
      <Route exact path='/' component={Home}/>
      <Route path='/directors' component={Directors}></Route>
      <Route path='/actors' component={Actors}></Route>
      <Route path='/movies' component={Movies}></Route>
      </div>
    </Router>
    </div>
  );
};

export default App
