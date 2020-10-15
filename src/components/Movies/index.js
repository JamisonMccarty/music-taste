import React from 'react';
import './index.css';
import Match from '../Matches';
// import { SketchPicker } from 'react-color';

class MoviePage extends React.Component {
  state= {
    background: '#fff',
    url: '',
  };


  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      url: `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${e.target.value}&k=345217-TasteEve-Q79CTN8V&type=movies&info=1`,
    })
  }

  handleClick = () => {
    console.log(this.state.url);
    fetch(this.state.url)
      .then(response => {
          return response.json();
      })
      .then(data => {
        let topArtist = data.Similar.Results.splice(0, 1);
        let spliced = data.Similar.Results.splice(1, 5);
        let spliced2 = data.Similar.Results.splice(5, 5);
        console.log(spliced);
        console.log(spliced2);
        console.log(topArtist);
        this.setState({
          data: spliced,
          data2: spliced2,
          topartist: topArtist,
        })
      });
  };


  // let similarArtists = this.state.data.results.map((artist, index) => {
  //   return (
  //     <div key={index} className="card p-3 m-3 col-md-3">
  //       <p>{artist.Name}{similarArtists}</p>
  //
  //     </div>
  //   )
  // })

  // {this.state.data.mockblog && this.state.data.mockblog.map((post, index) => {
  //   return <Link key={generateKey(index)} to={`/${stripWhiteSpace(post.title)}`}>{post.title}</Link>;
  // })}

  // <p>{this.state.data && this.state.data[0].wTeaser}</p>

  render() {
    return(
      <div className="parent">
        <div className="center">
          <h2>Movie Search</h2>
          <input name="movie" onChange={this.handleChange} placeholder="Search Artist" />
          <button className="search" onClick={this.handleClick}><span role="img" aria-label="movie">🎬</span>SEARCH</button>
        <div className="artists">
            {this.state.topartist && this.state.topartist.map((artist, index) => {
              return (
                <div className="teaser">
                  <h2>Top Match</h2>
                  <h2>{artist.Name}</h2>
                  <p>{artist.wTeaser}</p>
                  <iframe title={artist.Name} width="400" height="202.5" src={artist.yUrl} frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>);
            })}
          <div className="list-container">
            <div className="artist-list">
              <Match artists={this.state.data} />
            </div>
            <div className="artist-list">
              <Match artists={this.state.data2}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }

}



export default MoviePage;
