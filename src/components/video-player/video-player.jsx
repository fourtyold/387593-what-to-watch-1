import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    return <div>
      <video
        ref={this._videoRef}
      />
    </div>;
  }

  componentDidMount() {
    const {film} = this.props;
    const image = film.image;
    const video = this._videoRef.current;

    video.src = film.preview;
    video.poster = `img/${image.name}.${image.extension}`;
    video.muted = true;
    video.width = this.props.width;
    video.height = this.props.height;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
      return;
    }
    video.pause();
    video.load();
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default VideoPlayer;
