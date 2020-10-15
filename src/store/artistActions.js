// export const createArtist = (artist) => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {
//     //make async call to database
//     const firestore = getFirestore();
//     firestore.collection('artists').add({
//       ...artist,
//       createdAt: new Date(),
//     }).then(()=> {
//       dispatch({type: 'CREATE_ARTIST', artist});
//     }).catch((err)=>{
//       dispatch({type: 'CREATE_ARTIST_ERROR', err});
//     })
//
//   }
// };

export const createArtist = (artist) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to database
    const firestore = getFirestore();
    firestore.collection('users').doc('topArtists').add({
      ...artist,
    }).then(()=> {
      dispatch({type: 'CREATE_ARTIST', artist});
    }).catch((err)=>{
      dispatch({type: 'CREATE_ARTIST_ERROR', err});
    })

  }
};

export const addArtist = (artist) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make async call to database
    const firestore = getFirestore();
    let existing = getState().firebase.profile.topArtists;
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    if(existing){
    existing.push(artist.artist);}
    else{let existing = artist.artist}
    console.log(existing)
    firestore.collection('users').doc(userId).update({
      topArtists: existing
    }).then(()=> {
      dispatch({type: 'ADD_ARTIST', artist});
    }).catch((err)=>{
      dispatch({type: 'ADD_ARTIST_ERROR', err});
    })

  }
};
