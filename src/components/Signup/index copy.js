import React from 'react';
import firebase from 'firebase';

export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    accountCreated: false,
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  })
};

// createAccount = (e) => {
//   e.preventDefault();
//   this.props.firebase
//     .auth()
//     .createUserWithEmailAndPassword(this.state.email, this.state.password)
// //must be an arrow function so we have access to state of the component
//     .then((user)=>{
//       this.setState({
//         accountCreated: true,
//       });
//     }).catch(function(error){
//       var errorCode = error.code;
//       var errorMessage = error.message;
//     })
// };

// createAccount = () => {
//   e.preventDefault();
//   this.setState({
//     accountCreated: true,
//   })
// }

  render(){
    return(
      <div className='landingContainer'>
      <form>
        <input
          onChange={(e)=>this.props.emailChange(e)}
          name="email"
          type="text"
          placeholder="Create Username"
          />
        <input
          onChange={(e)=>this.props.passwordChange(e)}
          name="password"
          type="password"
          placeholder="Create Password"
          />

        <button
          className="createAccountButton"
          onClick={this.props.createAccount}
          >
            Create Account
        </button>
        <button
          className="createAccountButton"
          onClick={this.props.login}
          >
            Sign In
        </button>
      </form>
      </div>
    )
  }

};
