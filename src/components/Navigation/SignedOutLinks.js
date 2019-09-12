import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

import * as ROUTES from '../../constants/routes';

export default class SignedOutLinks extends React.Component {



render(){
return (


    <ul className="right">

      {/*<li>
        <NavLink activeClassName="activenavlinks" className="navlinks" to={ROUTES.LANDING}>Landing</NavLink>
      </li>*/}
      <li>
        <NavLink activeClassName="a activenavlinks" className="n navlinks" to={ROUTES.HOME}>Search Music</NavLink>
      </li>
      <li>
        <NavLink activeClassName="a activenavlinks" className="n navlinks" to={ROUTES.ABOUT}>About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="a activenavlinks" className="n navlinks" to={ROUTES.SIGNUP}>Sign Up</NavLink>
      </li>

      <li>
        <NavLink activeClassName="a activenavlinks" className="n navlinks" to={ROUTES.SIGNIN}>Log In</NavLink>
      </li>
      {/*<li>
        <NavLink to={ROUTES.MOVIE}>Movies</NavLink>
      </li>*/}




    </ul>

)
};
}
