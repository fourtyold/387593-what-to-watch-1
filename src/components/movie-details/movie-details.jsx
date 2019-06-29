import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getAvatarUrl} from "../../reducer/user/selectors.js";
import {getFilmById} from "../../reducer/films/selectors.js";
import {ActionCreators} from "../../reducer/filter/filter.js";
import MovieTabs from "../movie-tabs/movie-tabs.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import FilmsList from "../films-list/films-list.jsx";
import Header from "../header/header.jsx";
import PlayButton from "../play-button/play-button.jsx";
import MyListButton from "../my-list-button/my-list-button.jsx";

const WrappedMovieTabs = withActiveItem(MovieTabs);

class MovieDetails extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, width, height} = this.props;
    const userBlock = this._getUserBlock();
    const hidden = this.props.avatarUrl ? `` : `visually-hidden`;
    return <Fragment>
      <Header/>
      <section className="movie-card movie-card--full" style={{background: film.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton
                  id={film.id}
                />
                <MyListButton
                  id={film.id}
                  isFavorite={film.isFavorite}
                />
                <Link to={`/reviews/add/${film.id}`} className={`btn movie-card__button ${hidden}`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={`${film.name}  poster`} width={width} height={height} />
            </div>
            <WrappedMovieTabs film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <FilmsList
              id={film.id}
              filmsShowNumber={4}
            />
          </div>
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
  }

  componentDidMount() {
    this.props.changeFilterGenre(this.props.film.genre);
  }

  _getUserBlock() {
    if (this.props.avatarUrl) {
      return <div className="user-block__avatar">
        <img src={`https://es31-server.appspot.com${this.props.avatarUrl}`} alt="User avatar" width="63" height="63" />
      </div>;
    }
    return <Link to="/login" className="user-block__link">Sign in</Link>;
  }
}

MovieDetails.propTypes = {
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  changeFilterGenre: PropTypes.func.isRequired
};

MovieDetails.defaultProps = {
  width: 218,
  height: 327
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  avatarUrl: getAvatarUrl(state),
  film: getFilmById(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterGenre: (genre) => {
    dispatch(ActionCreators.setFilterGenre(genre));
  }
});

export {MovieDetails};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
