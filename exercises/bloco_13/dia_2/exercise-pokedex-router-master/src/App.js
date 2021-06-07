import React from 'react';
import './css/App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import FavoritedPokemons from './FavoritedPokemons';

function App() {
  return (
    <BrowserRouter>
      {/* Div com os links globais que vão ser renderizados em todas páginas */}
      <div className='nav-container'>
        <Link className='nav' to='/'>Home</Link>
        <Link className='nav' to='/about'>About</Link>
        <Link className='nav' to='/favoritedPokemons'>Favorited</Link>
      </div>

      {/* Rotas que vou precisar usar para cada página */}
      <Switch>
        <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
        <Route path='/pokes/:id' render={(props) => <PokemonDetails pokemons={pokemons} {...props} />}/>
        <Route path='/about' component={About} />
        <Route path='/favoritedPokemons' component={FavoritedPokemons} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
