import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Header from "../header/header.jsx";
import VideoPlayButton from "../video-play-button/video-play-button.jsx";
import VideoProgressBar from "../video-progress-bar/video-progress-bar.jsx";
import {getFilmById} from "../../reducer/films/selectors.js";

class MoviePlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this._handleExit = this._handleExit.bind(this);
    this._handleFullScreen = this._handleFullScreen.bind(this);
    this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
  }

  render() {
    const {film, isPlaying, playHandler, pauseHandler, progress, elapsedTime} = this.props;
    const formattedTime = this._formatElapsedTime(elapsedTime);
    return <Fragment>
      <Header/>

      <div className="player" style={{background: `gray`}}>
        <video
          ref={this._videoRef}
          onPlay={playHandler}
          onPause={pauseHandler}
          onTimeUpdate={this._handleTimeUpdate}
        />
        <button type="button" className="player__exit" onClick={this._handleExit}>Exit</button>

        <div className="player__controls">
          <VideoProgressBar
            formattedTime={formattedTime}
            progress={progress}
          />
          <div className="player__controls-row">
            <VideoPlayButton
              isPlaying={isPlaying}
              playHandler={playHandler}
              pauseHandler={pauseHandler}
            />
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen" onClick={this._handleFullScreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>;
  }

  componentDidMount() {
    const {film} = this.props;
    const video = this._videoRef.current;
    video.width = window.innerWidth;
    video.height = window.innerHeight;
    video.src = film.videoLink;
    this._setVideoSize(video);
    this.props.setTotalTime(film.runTime);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    this._setVideoSize(video);
    if (this.props.isPlaying) {
      video.play();
      return;
    }
    video.pause();
  }

  _setVideoSize(obj) {
    obj.width = this.props.width;
    obj.height = this.props.height;
  }

  _handleExit() {
    this.props.pauseHandler();
    history.back();
  }

  _handleFullScreen() {
    const video = this._videoRef.current;
    video.requestFullscreen();
  }

  _handleTimeUpdate() {
    if (!document.fullscreenElement) {
      const video = this._videoRef.current;
      this.props.handleTimeUpdate(video.currentTime);
    }
  }

  _formatElapsedTime(time) {
    let hours = Math.floor(time / 3600);
    hours = hours < 10 ? `0${hours}` : hours.toString();
    let minutes = Math.floor(time % 3600 / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    let seconds = Math.floor((time % 3600 / 60 - minutes) * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    return {hours, minutes, seconds};
  }
}

MoviePlayer.propTypes = {
  playHandler: PropTypes.func.isRequired,
  pauseHandler: PropTypes.func.isRequired,
  handleTimeUpdate: PropTypes.func.isRequired,
  setTotalTime: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  elapsedTime: PropTypes.number.isRequired,
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired
  }),
  width: PropTypes.number,
  height: PropTypes.number
};

MoviePlayer.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilmById(state, ownProps)
});

export {MoviePlayer};

export default connect(mapStateToProps)(MoviePlayer);
