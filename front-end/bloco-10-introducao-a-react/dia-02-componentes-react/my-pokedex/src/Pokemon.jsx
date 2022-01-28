import React from "react";
import PropTypes from "prop-types";
import "./Pokemon.css"

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image }} = this.props;
    return (
      <div className="pokemon-container">
        <div className="pokemon-info">
          <span>{name}</span>
          <span>{type}</span>
          <span>{`Average Weight: ${value}${measurementUnit}`}</span>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape ({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape ({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default Pokemon;