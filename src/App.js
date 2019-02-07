import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Filters } from './components/Filters';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/filters/:key/:value" component={Filters} />
        </div>
      </Router>
    );
  }
}

export default App;
