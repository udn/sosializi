import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

import './Layout.scss';

/* eslint-disable react/prefer-stateless-function */
export default class Layout extends Component {
  /* eslint-disable react/no-unescaped-entities */
  render() {
    const { children } = this.props;
    return (
      <section>
        <header>
          <ul>
            <li>
              <Link exact to="/" activeClassName="active">
                Comments (Root URL)
              </Link>
            </li>
            <li>
              <Link to="/react-router" activeClassName="active">
                Test React Router ('/react-router')
              </Link>
            </li>
            <li>
              <Link to="/react-router/redirect" activeClassName="active">
                Test Redirect (url to '/react-router/redirect' which goes to root '/')
              </Link>
            </li>
          </ul>
        </header>
        {children}
      </section>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
