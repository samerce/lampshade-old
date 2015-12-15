/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends React.Component {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    // <a className="Navigation-link" href="/about" onClick={Link.handleClick}>Artists</a>
    //     <a className="Navigation-link" href="/contact" onClick={Link.handleClick}>Calendar</a>
    //     <a className="Navigation-link" href="/login" onClick={Link.handleClick}>Gallery</a>
    //     <a className="Navigation-link" href="/register" onClick={Link.handleClick}>Blog</a>
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="https://www.google.com/maps/place/Lampshade/@42.241299,-83.614931,17z/data=!3m1!4b1!4m2!3m1!1s0x883ca8473610acf3:0xb3f6b8690ef26ccb" target="_blank">206 W Michigan Ave, Ypsilanti, Michigan</a>
        <div className="social-networks">
          <a className="Navigation-link icon" href="mailto:smile@lampshade.life"><i className="fa fa-envelope"></i></a>
          <a className="Navigation-link icon" href="https://facebook.com/lampshade.life" target="_blank"><i className="fa fa-facebook"></i></a>
          <a className="Navigation-link icon" href="https://twitter.com/ypsilampshade" target="_blank"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="phone">
          <a className="Navigation-link" href="tel:7346568617">(734) 656-8617</a>
        </div>
      </div>
    );
  }

}

export default Navigation;
