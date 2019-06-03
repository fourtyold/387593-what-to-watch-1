import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = (props) => {
  return <article className="small-movie-card catalog__movies-card"
    onMouseEnter={props.onEnter}
    onMouseLeave={props.onLeave}
  >
    <VideoPlayer
      film={props.film}
      width={props.width}
      height={props.height}
      isPlaying={props.isPlaying}
      muted={props.muted}
    />
    <h3 className="small-movie-card__title" onClick={props.cardHeaderClickHandler}>
      <a className="small-movie-card__link" href={props.film.page}>{props.film.name}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.shape({
      name: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.string,
    page: PropTypes.string,
    preview: PropTypes.string
  }).isRequired,
  onLeave: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  cardHeaderClickHandler: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool
};

FilmCard.defaultProps = {
  muted: true,
  width: 280,
  height: 175
};

export default FilmCard;
