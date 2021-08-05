import React, { Component } from 'react';

class PokemonDetails extends Component {
  render() {
    const { match } = this.props;
    console.log('match', match);
    return <h1>{ match.props.id }</h1>
  }
}

export default PokemonDetails;
