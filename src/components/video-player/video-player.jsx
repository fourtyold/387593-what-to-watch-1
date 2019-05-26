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
    video.width = this.props.width;
    video.height = this.props.height;
    video.muted = this.props.muted;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    video.muted = this.props.muted;
    if (this.props.isPlaying) {
      video.play();
      return;
    }
    video.pause();
    video.load();
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.objectOf(PropTypes.string),
    name: PropTypes.string,
    page: PropTypes.string,
    preview: PropTypes.string
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
