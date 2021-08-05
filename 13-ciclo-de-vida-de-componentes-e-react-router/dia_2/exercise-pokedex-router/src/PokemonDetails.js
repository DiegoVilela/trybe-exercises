import React, { Component } from 'react';

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
    console.log('rendered!');
    const { match: { params: { id } }, pokemons } = this.props;
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      summary,
      foundAt,
    } = this.getPokemonById(id, pokemons);

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
