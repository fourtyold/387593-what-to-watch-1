import React from "react";
import PropTypes from "prop-types";

const VideoPlayButton = (props) => {
  if (props.isPlaying) {
    return <button type="button" className="player__play" onClick={props.pauseHandler}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>;
  }
  return <button type="button" className="player__play" onClick={props.playHandler}>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
    <span>Play</span>
  </button>;
};

VideoPlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  playHandler: PropTypes.func.isRequired,
  pauseHandler: PropTypes.func.isRequired
};

export default VideoPlayButton;
