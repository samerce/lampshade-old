import React, { Component } from 'react';
import styles from './IntroVideo.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class IntroVideo extends Component {

  constructor() {
    super();
    this.state = {
      isPlaying: true,
      isVideoOnAutoPlay: true
    };
  }

  componentDidMount() {
    var video = React.findDOMNode(this.refs.video);
    video.currentTime = 2;
    video.play();
  }

  render() {
    var shouldHidePlayBtn = this.state.isPlaying && !this.state.isVideoOnAutoPlay;
    var iconClasses = 'play-btn ' + (shouldHidePlayBtn? 'hidden' : '');
    return (
      <div className="video-wrapper" onClick={this.onVideoClick}>
        <video className="bg-video" ref="video" src="http://d1iv9j7x4n3nsi.cloudfront.net/lampshade.mp4" muted controls={!this.state.isVideoOnAutoPlay} loop></video>
        <div className={iconClasses} ref="playIcon"><i className="fa fa-play-circle" /></div>
      </div>
    );
  }

  onVideoClick = () => {
    var video = React.findDOMNode(this.refs.video);
    if (this.state.isVideoOnAutoPlay) {
      video.muted = false;
      video.currentTime = 1;
      this.setState({isVideoOnAutoPlay: false});
    } else if (this.state.isPlaying) {
      video.pause();
      this.setPaused();
    } else {
      video.play();
      this.setPlaying();
    }
  }

  setPlaying = () => {
    this.setState({ isPlaying: true });
  }

  setPaused = () => {
    this.setState({ isPlaying: false });
  }

}

export default IntroVideo;
