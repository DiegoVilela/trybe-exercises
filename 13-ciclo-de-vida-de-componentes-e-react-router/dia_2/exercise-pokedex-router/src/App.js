import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import './App.css';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/pokemon/:id"
            render={ ({ match }) => <PokemonDetails match={ match } pokemons={ pokemons } /> }
          />
          <Route exact path="/" render={ () => <Pokedex pokemons={pokemons} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;