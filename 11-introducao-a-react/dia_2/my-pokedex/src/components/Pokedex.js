import { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons;

    return (
      <section>
        <h1>Pokedex</h1>
        <ul>
          {pokemons.map((pokemon) => <Pokemon pokemon={pokemon}  />)}
        </ul>
      </section>
    );
  }
}

export default Pokedex;
