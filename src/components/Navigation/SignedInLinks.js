import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { signOut } from '../../store/authActions';

import * as ROUTES from '../../constants/routes';

const SignedInLinks = (props) => {

return (
    <ul className="right">
      <li>
        <NavLink activeClassName="activenavlinks" className="navlinks" to={ROUTES.HOME}>Search Music</NavLink>
      </li>

      <li>
        <NavLink activeClassName="activenavlinks" className="navlinks" to={ROUTES.FAVORITEARTISTS}>Favorite Artists</NavLink>
      </li>

      <li>
        <NavLink activeClassName="activenavlinks" className="navlinks" to={ROUTES.PROFILE}>Profile</NavLink>
      </li>
      <li>
        <NavLink activeClassName="activenavlinks" className="navlinks" to={ROUTES.ABOUT}>About</NavLink>
      </li>
      {/*<li>
        <NavLink to={ROUTES.MOVIE}>Movies</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.FAVORITEMOVIES}>Favorite Movies</NavLink>
      </li>*/}

      <li>
        <NavLink activeClassName="activenavlinks" className="navlinks" onClick={props.signOut}>Log Out</NavLink>
      </li>

    </ul>

);
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
