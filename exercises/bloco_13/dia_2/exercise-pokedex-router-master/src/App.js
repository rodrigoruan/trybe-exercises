import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          path='/'
          render={(props) => <Pokedex {...props} pokemons={pokemons} />}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
