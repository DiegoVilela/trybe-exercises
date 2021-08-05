import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to="/" render={ () => <Pokedex pokemons={pokemons} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;