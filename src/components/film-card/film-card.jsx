import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({film, onHeaderClick, onPlay, onOver}) => {
  return <article className="small-movie-card catalog__movies-card" onMouseOver={() => {
    onOver(film);
  }}>
    <button className="small-movie-card__play-btn" type="button" onClick={() => {
      onPlay(film);
    }}>Play</button>
    <div className="small-movie-card__image">
      <img src={film.img} alt={film.name} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={onHeaderClick}>
      <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
    </h3>
  </article>;
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  onPlay: PropTypes.func,
  onOver: PropTypes.func,
  onHeaderClick: PropTypes.func
};

export default FilmCard;
