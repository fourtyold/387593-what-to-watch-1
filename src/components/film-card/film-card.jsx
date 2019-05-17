import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, imgWidth, imgHeight} = props;
  const image = film.image;
  return <article className="small-movie-card catalog__movies-card" onMouseOver={() => {
    props.onOver(film);
  }}>
    <button className="small-movie-card__play-btn" type="button" onClick={() => {
      props.onPlay(film);
    }}>Play</button>
    <div className="small-movie-card__image">
      <img src={`img/${image.name}.${image.extension}`} alt={image.name} width={imgWidth} height={imgHeight} />
    </div>
    <h3 className="small-movie-card__title" onClick={props.onHeaderClick}>
      <a className="small-movie-card__link" href={film.page}>{film.name}</a>
    </h3>
  </article>;
};

FilmCard.defaultProps = {
  imgWidth: 280,
  imgHeight: 175
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onPlay: PropTypes.func,
  onOver: PropTypes.func,
  onHeaderClick: PropTypes.func,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number
};

export default FilmCard;
