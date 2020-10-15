import React from 'react';
import { connect } from 'react-redux';
import { addArtist } from '../../store/artistActions';



class TopMatch extends React.Component {
  state={
    artist: '',
  }

addArtist = (e) =>{
  let newArtist = {artist: this.props.topartist.Name}
  this.props.createArtist(newArtist)
  alert("Artist Added To List")
}

  render() {
    const {auth}=this.props;
    return(
        <div className="center">
          {this.props.topartist &&
            <div className="teaser">
                  <h2 className="c">top match</h2>
                  <h4 className="bold">{this.props.topartist && this.props.topartist.Name}</h4>
                  <p className="artist-teaser t">{this.props.topartist && this.props.topartist.wTeaser}</p>
                  <iframe title={this.props.topartist.name} width="400" height="202.5" src={this.props.topartist && this.props.topartist.yUrl} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>
                  { auth.uid ?
                  <button className="btn reddish" onClick={this.addArtist}>add to list</button>
                  : null}
            </div>}
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArtist: (artist) => dispatch(addArtist(artist))
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMatch);



// export default connect(null, mapDispatchToProps)(HomePage)
