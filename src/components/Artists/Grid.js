import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children }) => (
  <div className="grid grid-cols-2 md:grid-cols-4">{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
