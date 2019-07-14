import React from 'react';
import PropTypes from 'prop-types';

const HelloComponent = props => (
  <div>
    <h2>{props.message}</h2>
  </div>
);

HelloComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HelloComponent;
