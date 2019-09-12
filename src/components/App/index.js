import React from 'react';
import { BrowserRouter as Router,
         Route,
       } from 'react-router-dom';

// import firebase from 'firebase';

// import firebase from 'firebase';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import AboutPage from '../About';
import MoviePage from '../Movies';
import FavoriteMovies from '../FavoriteMovies';
import FavoriteArtists from '../FavoriteArtists';
// import fbConfig from '../Firebase/fbConfig';
import SignIn from '../Signin';
import SignUp from '../Signup';
import Profile from '../Profile';
import TestPage from '../TestPage';

import * as ROUTES from '../../constants/routes';



export default class App extends React.Component{

  state={
    firebase: '',
  }

  // componentDidMount() {
  //   const firebaseApp = firebase.initializeApp({
  //     apiKey: "AIzaSyDV5Yu4-tZwNHoR37Q1ItsDATchpYd5nG0",
  //     authDomain: "music-taste-app.firebaseapp.com",
  //     databaseURL: "https://music-taste-app.firebaseio.com",
  //     projectId: "music-taste-app",
  //     storageBucket: "",
  //     messagingSenderId: "916980291168",
  //     appId: "1:916980291168:web:2c2e0eb6a5a2f13baa9505"
  //   });
  //   this.setState({
  //     firebase: firebaseApp,
  //   });
	// };



render(){
  return(

  <Router>
    <div>
      <Navigation  />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.PROFILE} component={Profile} />
      <Route path={ROUTES.SIGNUP} component={SignUp} />
      <Route path={ROUTES.SIGNIN} component={SignIn} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.MOVIE} component={MoviePage} />
      <Route path={ROUTES.FAVORITEMOVIES} component={FavoriteMovies}  />
      <Route path={ROUTES.FAVORITEARTISTS} component={FavoriteArtists}/>
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.TESTPAGE} component={TestPage}/>
    </div>
  </Router>
    )
  }
}
