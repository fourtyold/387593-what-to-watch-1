import React from "react";
import {VIDEO_UPDATE_FREQ} from "../../constants.js";

const withMoviePlayer = (Component) => {
  class WithMoviePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        totalTime: 0,
        progress: 0,
        currentTime: 0
      };

      this._playHandler = this._playHandler.bind(this);
      this._pauseHandler = this._pauseHandler.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._setTotalTime = this._setTotalTime.bind(this);
    }

    render() {
      const {isPlaying, progress, currentTime, totalTime} = this.state;
      const elapsedTime = totalTime - currentTime;
      return <Component
        {...this.props}
        playHandler={this._playHandler}
        pauseHandler={this._pauseHandler}
        handleTimeUpdate={this._handleTimeUpdate}
        setTotalTime={this._setTotalTime}
        isPlaying={isPlaying}
        progress={progress}
        elapsedTime={elapsedTime}
      />;
    }

    _playHandler() {
      if (!this.state.isPlaying) {
        this.setState({isPlaying: true});
      }
    }

    _pauseHandler() {
      if (this.state.isPlaying) {
        this.setState({isPlaying: false});
      }
    }

    _handleTimeUpdate(time) {
      const {currentTime, totalTime} = this.state;
      if (Math.abs(time - currentTime) >= VIDEO_UPDATE_FREQ) {
        const progress = time / totalTime * 100;
        this.setState({currentTime: time, progress});
      }
    }

    _setTotalTime(totalTime) {
      this.setState({totalTime: totalTime * 60});
    }
  }

  return WithMoviePlayer;
};

export default withMoviePlayer;
