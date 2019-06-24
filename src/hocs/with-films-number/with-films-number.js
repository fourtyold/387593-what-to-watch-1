import React from "react";
import {INITIAL_FILMS_NUMBER} from "../../constants.js";

const withFilmsNumber = (Component) => {
  class WithFilmsNumber extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmsShowNumber: INITIAL_FILMS_NUMBER
      };

      this._resetFilmsNumber = this._resetFilmsNumber.bind(this);
      this._increaseFilmsNumber = this._increaseFilmsNumber.bind(this);
    }

    render() {
      const {filmsShowNumber} = this.state;
      return <Component
        filmsShowNumber={filmsShowNumber}
        resetFilmsNumber={this._resetFilmsNumber}
        increaseFilmsNumber={this._increaseFilmsNumber}
      />;
    }

    componentWillMount() {
      this.setState({filmsShowNumber: INITIAL_FILMS_NUMBER});
    }

    _resetFilmsNumber() {
      this.setState({filmsShowNumber: INITIAL_FILMS_NUMBER});
    }

    _increaseFilmsNumber(val) {
      this.setState({filmsShowNumber: this.state.filmsShowNumber + val});
    }
  }

  return WithFilmsNumber;
};

export default withFilmsNumber;
