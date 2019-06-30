import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import FilmsList from "../films-list/films-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";
import Header from "../header/header.jsx";
import UserBlock from "../user-block/user-block.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getFilteredFilmsLength, getPromoFilm, getFilteredFilmsList} from "../../reducer/films/selectors.js";

const WrappedGenreList = withActiveItem(GenreList);

const Main = (props) => {
  const {promoFilm} = props;

  const showMoreBlock = props.filmsShowNumber < props.filmsArrayLength ?
    <ShowMore increaseFilmsNumber={props.increaseFilmsNumber}/> : null;

  return <Fragment>
    <Header/>

    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="user-block">
          <UserBlock/>
        </div>
      </header>

      <div className="movie-card__wrap">
        <MoviePromo/>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <WrappedGenreList
          resetFilmsNumber={props.resetFilmsNumber}
        />

        <div className="catalog__movies-list">
          <FilmsList
            id={promoFilm.id}
            filmsShowNumber={props.filmsShowNumber}
            films={props.films}
          />
        </div>
        {showMoreBlock}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>;
};

Main.propTypes = {
  // avatarUrl: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.object
  // ]),
  films: PropTypes.arrayOf(PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    name: PropTypes.string,
    id: PropTypes.number.isRequired
  })).isRequired,
  filmsShowNumber: PropTypes.number.isRequired,
  resetFilmsNumber: PropTypes.func.isRequired,
  filmsArrayLength: PropTypes.number.isRequired,
  increaseFilmsNumber: PropTypes.func.isRequired,
  promoFilm: PropTypes.shape({
    backgroundImage: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  filmsArrayLength: getFilteredFilmsLength(state),
  promoFilm: getPromoFilm(state),
  films: getFilteredFilmsList(state)
});

export {Main};

export default connect(mapStateToProps)(Main);
