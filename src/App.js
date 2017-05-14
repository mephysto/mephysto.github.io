import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/main.css';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Resume from './Resume';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/resume" component={Resume} />
          <Route path="/work" component={Work} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;