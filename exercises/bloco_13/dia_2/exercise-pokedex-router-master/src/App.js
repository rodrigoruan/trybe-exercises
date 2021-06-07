import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
        <Route
          path='/pokes/:id'
          render={(props) => <PokemonDetails pokemons={pokemons} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
