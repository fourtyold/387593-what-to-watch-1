import React from "react";
import PropTypes from "prop-types";

const withActiveLogin = (Component) => {
  class WithActiveLogin extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: null,
        password: null
      };

      this._emailChangeHandler = this._emailChangeHandler.bind(this);
      this._passwordChangeHandler = this._passwordChangeHandler.bind(this);
      this._loginHandler = this._loginHandler.bind(this);
    }

    render() {
      return <Component
        loginHandler={this._loginHandler}
        emailChangeHandler={this._emailChangeHandler}
        passwordChangeHandler={this._passwordChangeHandler}
      />;
    }

    _emailChangeHandler(event) {
      this.setState({email: event.target.value});
    }

    _passwordChangeHandler(event) {
      this.setState({password: event.target.value});
    }

    _loginHandler() {
      if (this.state.email && this.state.password) {
        this.props.loginHandler(this.state);
      }
    }
  }

  WithActiveLogin.propTypes = {
    loginHandler: PropTypes.func.isRequired
  };

  return WithActiveLogin;
};

export default withActiveLogin;
