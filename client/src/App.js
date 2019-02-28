import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Europe from './components/Europe'
import Asia from './components/Asia'
import Africa from './components/Africa'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/europe" component={Europe}/>
            <Route exact path="/asia" component={Asia}/>
            <Route exact path="/africa" component={Africa}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

