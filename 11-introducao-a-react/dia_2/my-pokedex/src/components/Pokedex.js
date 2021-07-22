import { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons;

    return (
      <section>
        <h1>Pokedex</h1>
        <ul>
          {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
        </ul>
      </section>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pokedex;
