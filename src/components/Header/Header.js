/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <span className="Header-brandTxt">Lampshade</span>
          </a>
          <Navigation className="Header-nav" />
          <div className="for-sale-container">
            Lampshade has hit the road! Big things are brewing. Stay tuned for more magic...
            <br />
            Email us with questions/ideas at <a href="mailto:smile@lampshade.life">smile@lampshade.life</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
