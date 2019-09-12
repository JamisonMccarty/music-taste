import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addArtist } from '../../store/artistActions';

class CreateArtist extends Component {
  state = {
    artist: '',
  }

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  if(this.state.artist.length){
  this.props.createArtist(this.state)}
  else{
    alert('Enter A Valid Artist Name')
  }
  this.setState({
    artist: '',
  })
}

render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <label htmlFor="artist">Search Artist Name</label>
          <input type="text" id="artist" onChange={this.handleChange}/>
        </div>
        <div>
          <button className="btn reddish waves-effect waves-light">Add Artist</button>
        </div>
      </form>
    </div>
  )
}


}

const mapDispatchToProps = (dispatch) => {
  return {
    createArtist: (artist) => dispatch(addArtist(artist))
  }
}

export default connect(null, mapDispatchToProps)(CreateArtist)
