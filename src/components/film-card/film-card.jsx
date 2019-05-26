import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = (props) => {
  const {film, width, height, isPlaying} = props;
  return <article className="small-movie-card catalog__movies-card"
    onMouseEnter={() => {
      props.onEnter(props.index);
    }}
    onMouseLeave={() => {
      props.onLeave();
    }}
  >
    <VideoPlayer
      film={film}
      width={width}
      height={height}
      isPlaying={isPlaying}
      muted={props.muted}
    />
    <h3 className="small-movie-card__title" onClick={props.onHeaderClick}>
      <a className="small-movie-card__link" href={film.page}>{film.name}</a>
    </h3>
  </article>;
};

FilmCard.defaultProps = {
  width: 280,
  height: 175
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.objectOf(PropTypes.string),
    name: PropTypes.string,
    page: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  onLeave: PropTypes.func,
  onEnter: PropTypes.func,
  onHeaderClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  muted: PropTypes.bool
};

export default FilmCard;
