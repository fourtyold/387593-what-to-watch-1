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
    const video = this._videoRef.current;
    video.width = this.props.width;
    video.height = this.props.height;
    this._setVideoProps(video);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    this._setVideoProps(video);
    if (this.props.isPlaying) {
      video.play();
      return;
    }
    video.pause();
    video.load();
  }

  _setVideoProps(obj) {
    const {film} = this.props;
    obj.src = film.previewVideoLink;
    obj.poster = film.previewImage;
    obj.muted = this.props.muted;
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

VideoPlayer.defaultProps = {
  muted: true
};

export default VideoPlayer;
