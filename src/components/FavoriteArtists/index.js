import React, {Component} from 'react';
import { connect } from 'react-redux';
import CreateArtist from '../CreateArtist';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import ArtistList from '../ArtistList';

class FavoriteArtists extends React.Component {


  render(){
    //can now pass this down as props to a child component (List Item component)
    //6 minutes on #12 tutorial
    const { artists, profile } = this.props;
    console.log(this.props)
    return(
      <div className="parent">
        <div className="container">
            <ArtistList />
          <div className="row">
            <div className="col l12">
              <CreateArtist />
            </div>
          </div>
        </div>
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
)(FavoriteArtists)
