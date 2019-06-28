import React from "react";
import PropTypes from "prop-types";

const VideoProgressBar = (props) => {
  const {progress, formattedTime} = props;
  return <div className="player__controls-row">
    <div className="player__time">
      <progress className="player__progress" value={progress} max="100"></progress>
      <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
    </div>
    <div className="player__time-value">{`${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`}</div>
  </div>;
};

VideoProgressBar.propTypes = {
  progress: PropTypes.number,
  formattedTime: PropTypes.shape({
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string
  })
};

export default VideoProgressBar;
