import { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    return <img src={this.props.image} alt='A pokemon' />;
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
