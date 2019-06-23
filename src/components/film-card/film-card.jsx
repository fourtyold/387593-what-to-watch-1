import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";

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
    <h3 className="small-movie-card__title">
      <Link to={{pathname: `/film/${props.film.id}`}} className="small-movie-card__link">{props.film.name}</Link>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    name: PropTypes.string,
    id: PropTypes.number.isRequired
  }).isRequired,
  onLeave: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
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
