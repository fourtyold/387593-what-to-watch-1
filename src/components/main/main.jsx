import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import FilmsList from "../films-list/films-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import MoviePromo from "../movie-promo/movie-promo.jsx";
import Header from "../header/header.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getAvatarUrl} from "../../reducer/user/selectors.js";
import {getFilteredFilmsLength, getPromoFilm} from "../../reducer/films/selectors.js";

const WrappedGenreList = withActiveItem(GenreList);

const Main = (props) => {
  const {promoFilm} = props;

  const userBlock = props.avatarUrl ?
    <div className="user-block__avatar">
      <img src={`https://es31-server.appspot.com${props.avatarUrl}`} alt="User avatar" width="63" height="63" />
    </div> :
    <Link to="/login" className="user-block__link">Sign in</Link>;

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
          {userBlock}
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
            filmsShowNumber={props.filmsShowNumber}
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
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
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
  avatarUrl: getAvatarUrl(state),
  filmsArrayLength: getFilteredFilmsLength(state),
  promoFilm: getPromoFilm(state)
});

export {Main};

export default connect(mapStateToProps)(Main);
