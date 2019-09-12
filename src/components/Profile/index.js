import React, {Component} from 'react';
import { connect } from 'react-redux';
import ArtistList from '../ArtistList';
import { Redirect } from 'react-router-dom';
import './index.css'



class Profile extends Component {

render(){
  const { auth, profile } = this.props;
  if(!auth.uid) return <Redirect to='/home'/>
  return (
    <div className="container">
      <div className="row center">
      <h2>USER PROFILE</h2>
      </div>
      <div className="row">
      <div className="col l8">
      <ArtistList/>
      </div>
      <div className="col l4">
        <img className="profile down" src="https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png"/>
        <h6><span className="bold">NAME:</span> {profile.firstName} {profile.lastName}</h6>

      </div>
      </div>
    </div>
  )

}
}

const mapStateToProps = (state) =>{
  console.log('hello', state.firebase.auth.uid)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Profile)
