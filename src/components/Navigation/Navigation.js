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
        <div className="social-networks">
          <a className="Navigation-link icon" href="mailto:smile@lampshade.life"><i className="fa fa-envelope"></i></a>
          <a className="Navigation-link icon" href="http://ypsilampshade.tumblr.com"><i className="fa fa-tumblr"></i></a>
          <a className="Navigation-link icon" href="https://facebook.com/lampshade.life" target="_blank"><i className="fa fa-facebook"></i></a>
          <a className="Navigation-link icon" href="https://twitter.com/ypsilampshade" target="_blank"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    );
  }

}

export default Navigation;
