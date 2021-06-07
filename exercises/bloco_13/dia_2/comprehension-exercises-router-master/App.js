import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link path='/strict-access'>Strict Access</Link>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/users/:id'
            render={(props) => (
              <Users {...props} greetingMessage='Good Morning' />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
