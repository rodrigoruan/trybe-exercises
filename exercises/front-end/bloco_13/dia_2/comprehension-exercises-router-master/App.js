import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './StrictAcess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
        <Link to='/strict-access'>Strict Acess</Link>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/strict-access'
            render={(props) => (
              <StrictAcess {...props} username='joao' password='1234' />
            )}
          />
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
