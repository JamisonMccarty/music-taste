import React from 'react';
import './index.css';
import Match from '../Matches';
import TopMatch from '../TopMatch';
import { connect } from 'react-redux';
import { addArtist } from '../../store/artistActions';
import ArtistList from '../ArtistList';

class HomePage extends React.Component {
  state= {
    background: '#fff',
    url: '',
    showList: false,
    nextArtists: false,
    textValid: false,
    submitDisabled: true,
  };


  handleChange = (e) => {
    let textValid = e.target.value ? true : false;
    this.setState({
      value: e.target.value,
      textValid: textValid,
      submitDisabled: !textValid,
      url: `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${e.target.value}&k=345775-Practice-DAOZ9B60&type=music&info=1&limit=20`,
    })
  }

  handleClick = () => {
    // this.setState({
    //   showList: true,
    // })
    console.log(this.state.url);
    fetch(this.state.url)
      .then(response => {
          return response.json();
      })
      .then(data => {
        if(!data.Similar.Results.length){
          alert("No results, check spelling and try again!")
          return
        }
        console.log(data)
        let topArtist = data.Similar.Results.splice(0, 1);
        let spliced = data.Similar.Results.splice(1, 5);
        let spliced2 = data.Similar.Results.splice(5, 5);
        console.log(spliced);
        console.log(spliced2);
        console.log(topArtist[0]);
        this.setState({
          data: spliced,
          data2: spliced2,
          topartist: topArtist[0],
          showList: true,
        })
      }).catch(()=>{
        alert ('ERROR')
      });
  };

  moreClick = (newArtist) => {
    console.log(newArtist)
    this.setState({
      topartist: newArtist,
    })
  };

  addArtist = () => {
    this.props.createArtist(this.state)
  }

  nextSet = () => {
    {this.state.nextArtists === false ? this.setState({
      nextArtists: true
    }) : this.setState({
      nextArtists: false
    })}
  }


  render() {
    const { auth, profile } = this.props;

    return(
        <div className="container">
          <div className="row">
          <div className="col l12">
          <h2  className="c">music search</h2>
          <input name="input-field" onChange={this.handleChange} placeholder="Search Artist" />
          <button disabled={this.state.submitDisabled} className="reddish btn waves-effect waves-light" onClick={this.handleClick}>♫  SEARCH</button>
          </div>
            {auth.uid ?
              <div>
              <div className="col l6">
                <TopMatch topartist={this.state.topartist} />
              </div>
                <div className="col l3">
                  <div>
                  {this.state.nextArtists === false ?
                    <Match artists={this.state.data} artists2={this.state.data2} moreClick={this.moreClick}/> :
                    <Match artists={this.state.data2} moreClick={this.moreClick}/>}
                    {this.state.showList === true ?
                      <div className="pull center">
                        {this.state.nextArtists === false ?
                          <button className="btn reddish" onClick={this.nextSet}>▶</button>:
                          <button className="btn reddish" onClick={this.nextSet}>◀</button>
                        }
                      </div> :null}
                   </div>
                </div>


                <div className="center col l3">
                  {this.state.showList === true ? <ArtistList/> : null}
                </div>
                </div>
                :
                <div>
                <div className="col l8">
                  <TopMatch topartist={this.state.topartist} />
                </div>
                  <div className="col l4">
                    <div>
                    {this.state.nextArtists === false ?
                      <Match artists={this.state.data} artists2={this.state.data2} moreClick={this.moreClick}/> :
                      <Match artists={this.state.data2} moreClick={this.moreClick}/>}
                      {this.state.showList === true ?
                        <div className="pull center">
                          {this.state.nextArtists === false ?
                            <button className="btn reddish" onClick={this.nextSet}>▶</button>:
                            <button className="btn reddish" onClick={this.nextSet}>◀</button>
                          }
                        </div> :null}
                     </div>
                  </div>
                  </div>}

          </div>
        </div>


    )
  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}


export default  connect(mapStateToProps)(HomePage)



// const mapDispatchToProps = (dispatch) => {
//   return {
//     createArtist: (artist) => dispatch(addArtist(artist))
//   }
// }
//
// export default connect(null, mapDispatchToProps)(HomePage)

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
//
// if (this.state.topartist.length === 1){
//   return (
//     <div>
//     <h1> Match</h1>
//     <h2>{this.state.topartist.Name}</h2>
//     <p>{artist.wTeaser}</p>
//     </div>
//   )
// }

// {this.state.topartist && this.state.topartist.map((artist, index) => {
//   return (
//     <div className="teaser">
//       <h1>Top Match</h1>
//       <h2>{artist.Name}</h2>
//       <p>{artist.wTeaser}</p>
//       <iframe width="400" height="202.5" src={artist.yUrl} frameBorder="0"
//       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//     </div>);
// })}
