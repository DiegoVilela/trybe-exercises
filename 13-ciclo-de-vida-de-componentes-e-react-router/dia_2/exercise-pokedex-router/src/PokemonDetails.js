import React, { Component } from 'react';
import NotFound from './NotFound';

class PokemonDetails extends Component {
  getPokemonById(id, pokemons) {
    return pokemons.find((pokemon) => pokemon.id === Number(id));
  }

  renderMaps(maps) {
    return maps.map(
      ({ location, map }) => <img key={location} src={map} alt={location} />
    );
  }

  render() {
    const { match: { params: { id } }, pokemons } = this.props;
    const pokemon = this.getPokemonById(id, pokemons);

    if (!pokemon) return <NotFound />

    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      summary,
      foundAt,
    } = pokemon;

    return(
      <div>
        <h1>{ name }</h1>
        <p><strong>Type: </strong>{ type }</p>
        <p><strong>Average Weight: </strong>{ value } { measurementUnit }</p>
        <p><strong>Summary: </strong>{ summary }</p>
        { this.renderMaps(foundAt) }
      </div>
    );
  }
}

export default PokemonDetails;
