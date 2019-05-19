import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null
    };
  }

  render() {
    const {films, cardHeaderClickHandler} = this.props;
    return films.map((film, i) => {
      return <FilmCard
        film = {film}
        onHeaderClick = {cardHeaderClickHandler}
        onPlay = {this._onPlayHandler.bind(this)}
        onOver = {this._onOverHandler.bind(this)}
        key = {i}
      />;
    });
  }

  _onPlayHandler(film) {
    return film;
  }

  _onOverHandler(film) {
    this.setState({activeFilm: film});
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardHeaderClickHandler: PropTypes.func
};

export default FilmsList;
