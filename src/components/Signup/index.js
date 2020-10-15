import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/authActions';
import * as ROUTES from '../../constants/routes';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    favoriteArtist: '',
    notlanding: true,
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  }

render(){
  const { auth, authError} = this.props;
  if(auth.uid) return <Redirect to='/home'/>
  return(
    <div className="container">
      <form onSubmit={this.handleSubmit} className="offwhite">
        {this.props.landingpage === true ? null:
        <h2 className="c">create account</h2> }
        <h6>sign up below, or <Link className="reddish-text" to={ROUTES.SIGNIN}>click here to log in</Link></h6>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="favoriteArtist">Favorite Artist</label>
          <input type="text" id="favoriteArtist" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <button className="btn normal reddish lighten-1 z-depth-0">Sign Up</button>
        </div>
        <div className="red-text center">
          { authError ? <p> {authError} </p> : null}
        </div>
      </form>
    </div>
  )
}

}

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
