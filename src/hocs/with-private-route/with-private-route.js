import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {checkIsAuthorizationRequired} from "../../reducer/user/selectors.js";

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    if (props.isAuthorizationRequired) {
      return <Redirect to="/login"/>;
    }

    return <Component {...props}/>;
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorizationRequired: checkIsAuthorizationRequired(state),
  });

  const wrapper = connect(mapStateToProps)(WithPrivateRoute);

  WithPrivateRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return wrapper;
};

export default withPrivateRoute;
