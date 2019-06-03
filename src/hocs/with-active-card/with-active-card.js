import React from "react";
import PropTypes from "prop-types";

const withActiveCard = (Component) => {
  class WitchActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.timer = null;
      this.state = {
        isPlaying: false
      };
      this._enterHandler = this._enterHandler.bind(this);
      this._leaveHandler = this._leaveHandler.bind(this);
      this.HANDLER_DELAY = 1000;
    }

    render() {
      const {isPlaying} = this.state;
      const {film, cardHeaderClickHandler} = this.props;
      return <Component
        film={film}
        cardHeaderClickHandler={cardHeaderClickHandler}
        onEnter={this._enterHandler}
        onLeave={this._leaveHandler}
        isPlaying={isPlaying}
      />;
    }

    _leaveHandler() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setState({isPlaying: false});
    }

    _enterHandler() {
      this.timer = setTimeout(() => {
        this.setState({isPlaying: true});
      }, this.HANDLER_DELAY);
    }
  }

  WitchActiveCard.propTypes = {
    film: PropTypes.shape({
      image: PropTypes.shape({
        name: PropTypes.string,
        extension: PropTypes.string
      }),
      name: PropTypes.string,
      page: PropTypes.string,
      preview: PropTypes.string,
      genre: PropTypes.string
    }),
    cardHeaderClickHandler: PropTypes.func.isRequired
  };

  return WitchActiveCard;
};

export default withActiveCard;
