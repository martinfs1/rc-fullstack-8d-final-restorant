import React from 'react';
import Nabvar from '../src/components/Nabvar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


//pages
import HomePage from './pages/HomePage';
import RegUser from './pages/RegUser';
import LoginSession from './pages/LoginSession'
import Footer from '../src/components/Footer';
import Menu from './pages/Menu'

function App() {

  return (
    <Router>
      <Route component={Nabvar} />
      <Switch>
        <Route path="/menu" exact component={Menu} />
        <Route path="/reg" exact component={RegUser} />
        <Route path="/log" exact component={LoginSession} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route component={Footer} />
    </Router>
  );
}

export default App;
