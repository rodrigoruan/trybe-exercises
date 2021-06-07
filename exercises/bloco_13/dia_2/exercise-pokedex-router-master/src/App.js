import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to='/pokemons/'>More infos about pokemon</Link>
      {/* <Route
        path='/pokemons/:id'
        render={(props) => <PokemonInfos pokemon={pokemons} {...props} />}
      /> */}
      <Route path='/' render={() => <Pokedex pokemons={pokemons} />} />
    </BrowserRouter>
  );
}

export default App;
