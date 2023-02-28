import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Projects from './Pages/Projects';
import Tools from './Pages/Tools';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
        <Route exact path="/" component={ About } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/tools" component={ Tools } />
        <Route exact path="/contact" component={ Contact } />
        

        <Route exact path="*" component={ NotFound } />
      </Switch>

      </div>
    )
  }
}

