import { Component } from 'react';

class Image extends Component {
  render() {
    return <img src={this.props.image} alt='A pokemon' />;
  }
}

export default Image;
