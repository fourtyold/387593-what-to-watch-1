import React from "react";
import FilmCard from "../film-card/film-card.jsx";

class FilmsList extends React.PureComponent {
  static getList(props, onPlayHandler, onOverHandler) {
    const {films, cardHeaderClickHandler} = props;
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

  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null
    };
  }

  render() {
    return FilmsList.getList(this.props,
        (film) => {
          return film;
        },
        (film) => {
          this.setState({activeFilm: film});
        });
  }

}

export default FilmsList;
