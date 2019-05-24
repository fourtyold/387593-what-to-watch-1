import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.state = {
      muted: false
    };
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
    video.muted = this.state.muted;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    this.setState({muted: this.props.muted});
    video.muted = this.state.muted;
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
    image: PropTypes.object,
    name: PropTypes.string,
    page: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default VideoPlayer;
