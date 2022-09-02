import React from 'react';
import PropTypes from 'prop-types';

const HeroLayout = ({ children }) => (
  <div className="h-screen30">{children}</div>
);

HeroLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroLayout;
