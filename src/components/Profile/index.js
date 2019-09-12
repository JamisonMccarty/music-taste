import React, {Component} from 'react';
import { connect } from 'react-redux';
import ArtistList from '../ArtistList';
import { Redirect } from 'react-router-dom';



class Profile extends Component {

render(){
  const { auth, profile } = this.props;
  if(!auth.uid) return <Redirect to='/home'/>
  return (
    <div className="container">
      <h2>{profile.firstName} {profile.lastName}</h2>

      <ArtistList/>

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
