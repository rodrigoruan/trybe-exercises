import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
        <Route
          path='/pokes/:id'
          render={(props) => <PokemonDetails pokemons={pokemons} {...props} />}
        />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
