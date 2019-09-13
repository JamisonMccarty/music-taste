import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import {FaMusic} from 'react-icons/fa';

// import * as ROUTES from '../../constants/routes';

const Navigation = (props) => {

const { auth } = props;

//check to see if auth.uid exists
const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

return (
  <nav className="nav-wrapper navtest no-shadows">
    <div className="container">
      <Link to='/' className="brand-logo"><FaMusic size={30}/></Link>
        {links}
    </div>
  </nav>

);

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}


export default  connect(mapStateToProps)(Navigation)


// <div className="navbar">
//   <ul>
//
//     <li>
//       <Link to={ROUTES.LANDING}>🎵</Link>
//     </li>
//     {!this.state.signedIn &&
//       <li>
//         <Link to={ROUTES.SIGNIN}>Sign In</Link>
//       </li>
//     }
//     <li>
//       <Link to={ROUTES.ABOUT}>About</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.MOVIE}>Movies</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.FAVORITEMOVIES}>Favorite Movies</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.FAVORITEARTISTS}>Favorite Artists</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.HOME}>Music</Link>
//     </li>
//
//   </ul>
// </div>
