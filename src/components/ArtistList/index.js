import React, {Component} from 'react';
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class ArtistList extends Component{


  render(){
    const { artists, profile } = this.props;
    return(
      <div>
          <h2 className="c">favorite artists</h2>
          <ul className="collection">{profile.topArtists && profile.topArtists.map((artist)=>{
            return (
              <div  className="testdiv l6">
                <li className="collection-item">{artist}</li>
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
