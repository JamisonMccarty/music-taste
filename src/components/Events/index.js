import React from 'react';
// import { SketchPicker } from 'react-color';
import * as Constants from '../../constants/constants';


class EventsPage extends React.Component {
  state= {
    background: '#fff',
    url: '',

  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      url: `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${e.target.value}&k=345217-TasteEve-Q79CTN8V&type=music&info=1`,
    })
  }

  handleClick = () => {
    console.log(this.state.url);
    fetch(this.state.url)
      .then(response => {
          return response.json();
      })
      .then(data => {
        console.log(data.Similar.Results);
        this.setState({
          data: data.Similar.Results,
        })
      });
  }


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

  // {this.state.data && this.state.data.map((artist, index) => {
  //   return (
  //     <div>
  //       <p>{artist.Name}</p>
  //       <input placeholder={artist.Name}/>
  //       <button>Search</button>
  //     </div>);
  // })}

  render() {
    return(
      <div>
        <h1>Music Search</h1>
        <input name="music" onChange={this.handleChange} placeholder="Search Artist" />
        <button onClick={this.handleClick}> Submit</button>
        <p>{this.state.data && this.state.data[0].wTeaser}</p>
      </div>
    )
  }

};


export default EventsPage;
