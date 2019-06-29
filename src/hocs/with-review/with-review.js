import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";
import {Operation} from "../../reducer/user/user.js";

import {getFilmById} from "../../reducer/films/selectors.js";
import {REVIEW_LENGTH} from "../../constants.js";

const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: 0
      };

      this._reviewHandler = this._reviewHandler.bind(this);
      this._ratingHandler = this._ratingHandler.bind(this);
      this._postHandler = this._postHandler.bind(this);
    }

    render() {
      const isEnabled = this._checkPostEnabled();
      return <Component
        {...this.props}
        reviewHandler={this._reviewHandler}
        ratingHandler={this._ratingHandler}
        isEnabled={isEnabled}
        formSubmitHandler={this._postHandler}
      />;
    }

    componentWillUnmount() {
      this.setState({
        review: ``,
        rating: 0
      });
    }

    _reviewHandler(evt) {
      this.setState({review: evt.target.value});
    }

    _ratingHandler(evt) {
      this.setState({rating: evt.target.value});
    }

    _checkPostEnabled() {
      if (this.state.review.length >= REVIEW_LENGTH.MIN && this.state.review.length <= REVIEW_LENGTH.MAX && this.state.rating) {
        return true;
      }
      return false;
    }

    _postHandler(evt) {
      evt.preventDefault();
      this.props.sendReview({
        comment: this.state.review,
        rating: this.state.rating,
        id: this.props.film.id
      });
    }
  }

  WithReview.propTypes = {
    sendReview: PropTypes.func.isRequired,
    film: PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  };

  return WithReview;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  film: getFilmById(state, ownProps)
});

const mapDispatchToProps = (dispatch) => ({
  sendReview: (review) => {
    dispatch(Operation.postReview(review));
  }
});

const composedWithReview = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReview
);

export {withReview};

export default composedWithReview;
