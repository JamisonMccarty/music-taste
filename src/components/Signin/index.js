import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    this.props.signIn(this.state);
  }

render(){
  const { authError, auth } = this.props;
  if(auth.uid) return <Redirect to='/home'/>
    return(

      <div className="container">

        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn normal tan lighten-1 z-depth-0">Login</button>
          </div>
          <div className="red-text center">
            { authError ? <p>{authError}</p> :  null}
          </div>
        </form>
      </div>
    )
}

};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
//first thing is null because thats where mapStateToProps would be
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);