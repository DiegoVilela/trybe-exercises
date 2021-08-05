import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import './App.css';
import pokemons from './data';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        
          <Switch>
            <Route
              path="/pokemon/:id"
              render={ ({ match }) => <PokemonDetails match={ match } pokemons={ pokemons } /> }
            />
            <Route path="/about" component={ About } />
            <Route exact path="/" render={ () => <Pokedex pokemons={pokemons} /> } />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;