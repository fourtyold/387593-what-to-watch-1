import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
      handlerDelay: this.props.delay
    };
    this.timer = null;
    this._enterHandler = this._enterHandler.bind(this);
    this._leaveHandler = this._leaveHandler.bind(this);
  }

  render() {
    const {films, cardHeaderClickHandler} = this.props;
    return films.map((film, i) => {
      return <FilmCard
        film={film}
        onHeaderClick={cardHeaderClickHandler}
        onEnter={this._enterHandler}
        onLeave={this._leaveHandler}
        index={i}
        isPlaying={i === this.state.activeFilm}
        muted={true}
        key={`film-card-${i}`}
      />;
    });
  }

  _leaveHandler() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.setState({activeFilm: -1});
  }

  _enterHandler(i) {
    this.timer = setTimeout(() => {
      this.setState({activeFilm: i});
    }, this.state.handlerDelay);
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardHeaderClickHandler: PropTypes.func,
  delay: PropTypes.number.isRequired
};

export default FilmsList;
