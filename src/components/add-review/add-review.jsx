import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getAvatarUrl} from "../../reducer/user/selectors.js";
import {getFilmById} from "../../reducer/films/selectors.js";
import Header from "../header/header.jsx";

const AddReview = (props) => {
  const {film, avatarUrl, width, height} = props;

  const userBlock = avatarUrl ?
    <div className="user-block__avatar">
      <img src={`https://es31-server.appspot.com${props.avatarUrl}`} alt="User avatar" width="63" height="63" />
    </div> :
    <Link to="/login" className="user-block__link">Sign in</Link>;

  return <Fragment>
    <Header/>
    <section className="movie-card movie-card--full" style={{background: film.backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/film/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            {userBlock}
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width={width} height={height} />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={props.formSubmitHandler}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={props.ratingHandler}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={props.ratingHandler}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={props.ratingHandler}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={props.ratingHandler}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={props.ratingHandler}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={props.reviewHandler}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={!props.isEnabled}>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  </Fragment>;
};

AddReview.propTypes = {
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  reviewHandler: PropTypes.func.isRequired,
  ratingHandler: PropTypes.func.isRequired,
  formSubmitHandler: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired
};

AddReview.defaultProps = {
  width: 218,
  height: 327
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  avatarUrl: getAvatarUrl(state),
  film: getFilmById(state, ownProps)
});

export {AddReview};

export default connect(mapStateToProps)(AddReview);
