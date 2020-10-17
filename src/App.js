import React, { Component } from 'react';
import { BrowserRouter,HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

class App extends Component{
  //https://github.com/facebook/create-react-app/issues/1765
    //basically I added to the "build" in package.json
  render()  {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Education" component={Education} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Connect" component={Connect} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>     
      </BrowserRouter>
    );
  }
}

export default App;