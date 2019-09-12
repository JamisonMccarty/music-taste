import React from 'react';



export default class Match extends React.Component {

moreClick = (e) => {
  this.props.moreClick(this.props.artists[e.target.value])
}
nextArtists = () => {
  let artists = this.props.artists2;
}

  render(){
    let artists = this.props.artists;
    return(
    <div className="container">
      {this.props.artists && this.props.artists.map((artist, index) => {
      return (
        <div className="row">
          <div className="center col l8">
            <h5>{artist.Name}</h5>
          </div>
          <div className="center col l4">
            <button className="btn" name={artist.Name} value={index} onClick={this.moreClick}>+</button>
          </div>
        </div>
      );
      })}
    </div>
  );

}
}
