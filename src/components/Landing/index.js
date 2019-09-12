import React from 'react';
import SignUp from '../Signup';
import './index.css';
// import firebase from 'firebase';


export default class Landing extends React.Component {
  state={
    signedIn: false,
    accountCreated: false,
    notlanding: false,
  }


  emailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  };
  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  };

  createAccount = (e) => {
    e.preventDefault();
    this.props.firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //must be an arrow function so we have access to state of the component
      .then((user)=>{
        this.setState({
          accountCreated: true,
        });
      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
      })
  };

  login = (e) =>{
    e.preventDefault();
		this.props.firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((data)=>{
				this.setState({
					signedIn: true,
					user: data.user,
				})
			})
	};

  // <div className="bars">
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  //     <div className="bar"></div>
  // </div>


  render(){
    return(
        <div className="container">
            <div className="row center-align">


              <div className="col l12 m12 s12 center">
                <div className="bars">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
                </div>
                <div className="col l12 m12 s12 center">
                    <h2 className="c">music taste</h2>
                </div>
              <div className="col l12 m12 s12 center-align">
                      <SignUp landingpage={true}/>
              </div>

            </div>
        </div>
    )
  }

};
