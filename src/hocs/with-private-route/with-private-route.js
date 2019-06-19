import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    if (props.isAuthorizationRequired) {
      return <Redirect to="/login"/>;
    }

    return <Component {...props}/>;
  };

  WithPrivateRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };
};

export default withPrivateRoute;
