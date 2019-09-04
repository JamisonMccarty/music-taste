import React from 'react';
// import { SketchPicker } from 'react-color';

class HomePage extends React.Component {
  state= {
    background: '#fff',
    url: '',
  };


  // handleChangeComplete = (color) => {
  //   this.setState({ background: color.hex});
  // };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      url: `https://tastedive.com/api/similar?q=${e.target.value}&type=music&k=345217-TasteEve-Q79CTN8V`,
    })
  }

  handleClick = () => {
    fetch(this.state.url)
      .then(response => {
          return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
        })
      });
  }

  render() {
    return(
      <div>
      <h1>Music Search</h1>
      <input name="music" onChange={this.handleChange} placeholder="Search Artist" />
      <button onClick={this.handleClick}> Submit </button>
      </div>
    )
  }

}



export default HomePage;
