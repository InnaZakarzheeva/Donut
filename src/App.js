import React, { Component } from 'react';
import './App.css';
import DonutPage from './components/donutPage/index';
import Buy from './components/Buy/buy';
import { Switch, Route, Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loading from './components/loading/loading';

const history = createBrowserHistory();

export default class App extends Component {
  state = {
    loading: true
  }
  componentDidMount = () => {
    new Promise((resolve) => setTimeout(() => resolve(), 2500))
        .then(() => this.setState({ loading: false }));
  }
  returnPage = () => {
    if(this.state.loading){
      return <Loading/>
    } else {
      return <Router history={history}>
            <Switch>
              <Route exact={true} path='/' component={DonutPage}/>
              <Route path='/buy/' component={Buy}/>
            </Switch>
          </Router>
    }
  }
  render() {
    return (
      <div className="App">
        {this.returnPage()}
      </div>
    );
  }
}
