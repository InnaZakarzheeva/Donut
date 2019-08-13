import React, { Component } from 'react';
import './App.css';
import DonutPage from './components/donutPage/index';
import Buy from './components/Buy/buy';
import { Switch, Route, Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact={true} path='/' component={DonutPage}/>
            <Route path='/buy/' component={Buy}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
