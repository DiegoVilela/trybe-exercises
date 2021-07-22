import { Component } from 'react';
import Image from './Image';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <li>
        <p><strong>{name}</strong></p>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <Image image={image} />
      </li>
    );
  }
}

export default Pokemon;
