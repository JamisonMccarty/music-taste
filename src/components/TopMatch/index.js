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
    return(
        <div className="center">
          {this.props.topartist &&
            <div className="teaser">
                  <h2>Top Match</h2>
                  <h3>{this.props.topartist && this.props.topartist.Name}</h3>
                  <p>{this.props.topartist && this.props.topartist.wTeaser}</p>
                  <iframe title={this.props.topartist.name} width="400" height="202.5" src={this.props.topartist && this.props.topartist.yUrl} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <button className="btn normal" onClick={this.addArtist}>Add to List</button>
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

export default connect(null, mapDispatchToProps)(TopMatch);



// export default connect(null, mapDispatchToProps)(HomePage)
