export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'});
    }).catch((err)=>{
      dispatch({type: 'LOGIN_ERROR', err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(()=>{
      dispatch({type: 'SIGNOUT_SUCCESS'})
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
  //need firebase for user
    const firebase = getFirebase();
  //need firestore to associate data with user
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password,
    ).then((resp)=>{
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        profilePicture: '',
        topArtists: [newUser.favoriteArtist],
      })
    }).then(()=>{
        dispatch({ type: 'SIGNUP_SUCCESS'})
      }).catch((err)=>{
        dispatch({ type: 'SIGNUP_ERROR', err})
      })


  }
}
