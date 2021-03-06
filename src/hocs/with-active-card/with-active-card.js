import React from "react";
import PropTypes from "prop-types";
import {HANDLER_DELAY} from "../../constants.js";

const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.timer = null;
      this.state = {
        isPlaying: false
      };
      this._enterHandler = this._enterHandler.bind(this);
      this._leaveHandler = this._leaveHandler.bind(this);
    }

    render() {
      const {isPlaying} = this.state;
      const {film} = this.props;
      return <Component
        film={film}
        onEnter={this._enterHandler}
        onLeave={this._leaveHandler}
        isPlaying={isPlaying}
      />;
    }

    componentWillUnmount() {
      this._leaveHandler();
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
      }, HANDLER_DELAY);
    }
  }

  WithActiveCard.propTypes = {
    film: PropTypes.shape({
      previewImage: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired
    }).isRequired
  };

  return WithActiveCard;
};

export default withActiveCard;
