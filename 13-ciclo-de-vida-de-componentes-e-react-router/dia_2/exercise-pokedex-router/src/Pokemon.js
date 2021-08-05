import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <Link to="/">Details</Link>
      </div>
    );
  }
}

export default Pokemon;