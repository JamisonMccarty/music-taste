import React, {Component} from 'react';
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class ArtistList extends Component{


  render(){
    const { artists, profile } = this.props;
    return(
      <div>
          <h3>Favorite Artists</h3>
          <ul>{profile.topArtists && profile.topArtists.map((artist)=>{
            return (
              <div  className="testdiv l6">
                <li className="test">{artist}</li>
              </div>
                  )
                })}
          </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    artists: state.firestore.ordered.artists,
    profile: state.firebase.profile,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'users'}
  ])
)(ArtistList)
