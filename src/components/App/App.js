/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import IntroVideo from '../IntroVideo';
import CallToAction from '../CallToAction';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        <div className="flyers">
          {['opening', 'comedy', 'crystals'].map(name => (
            <a href={`/img/flyer-${name}.jpg`}>
              <img className="flyer-img" src={`img/flyer-${name}.jpg`} />
            </a>
          ))}
        </div>
        <IntroVideo />
        <CallToAction />
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }
}

export default App;
