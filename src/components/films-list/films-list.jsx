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
    const onPlayHandler = (film) => {
      return film;
    };
    const onOverHandler = (film) => {
      this.setState({activeFilm: film});
    };
    return films.map((film, i) => {
      return <FilmCard
        film = {film}
        onHeaderClick = {cardHeaderClickHandler}
        onPlay = {onPlayHandler}
        onOver = {onOverHandler}
        key = {i}
      />;
    });
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardHeaderClickHandler: PropTypes.func
};

export default FilmsList;
