import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {getAvatarUrl} from "../../reducer/user/selectors.js";
import {Operation} from "../../reducer/films/films.js";

const UserBlock = (props) => {
  const {avatarUrl, getFavoritesList} = props;
  if (avatarUrl) {
    return <div className="user-block__avatar" onClick={getFavoritesList}>
      <Link to="/mylist">
        <img src={`https://es31-server.appspot.com${avatarUrl}`} alt="User avatar" width="63" height="63" />
      </Link>
    </div>;
  }
  return <Link to="/login" className="user-block__link">Sign in</Link>;
};

UserBlock.propTypes = {
  avatarUrl: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  getFavoritesList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getFavoritesList: () => {
    dispatch(Operation.getFavoritesList());
  }
});

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  avatarUrl: getAvatarUrl(state)
});

export {UserBlock};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
