import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';

const Layout = ({ children }) => (
  <div className="min-h-screen">
    <Nav />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
