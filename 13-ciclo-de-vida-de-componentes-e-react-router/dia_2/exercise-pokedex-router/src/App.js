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
          <Route to="/" render={ () => <Pokedex pokemons={pokemons} /> } />
          <Route to="/pokemon/:id" render={ (props) => <PokemonDetails {...props} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;