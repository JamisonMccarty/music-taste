import React from 'react';
import './index.css';



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
    <div className="center">
      {this.props.artists ?
      <h2 className="c">matches</h2>
      : null}
      {this.props.artists ?
      <div className="row valign-wrapper">
        <div className="left-align col l7">
          <h6 className="bold">artist name</h6>
        </div>
        <div className="center col l5 pull-right">
          <h6 className="bold">see more</h6>
        </div>
      </div>
      : null }
      {this.props.artists && this.props.artists.map((artist, index) => {
      return (
        <div className="row valign-wrapper">
          <div className="left-align col l8">

            <h6>{artist.Name}</h6>
          </div>
          <div className="center col l4 pull-right">
            <button className="btn-floating reddish add" name={artist.Name} value={index} onClick={this.moreClick}>+</button>
          </div>
        </div>
      );
      })}
    </div>
  );

}
}
