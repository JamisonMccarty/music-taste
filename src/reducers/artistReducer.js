const initState = {
    artist: [
      {id: '1', artist: 'Test1'},
      {id: '2', artist: 'Test2'},
      {id: '3', artist: 'Test3'}
    ]
};

const artistReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_ARTIST':

      console.log('created artist', action.artist, state);
      return state;
    case 'CREATE_ARTIST_ERROR':
      console.log('create project error', action.err);
      return state;
    case 'ADD_ARTIST':
      console.log('added artist', action.artist, state);
      return state;
    case 'ADD_ARTIST_ERROR':
      console.log('add artist error', action.err);
      return state;
    default:
      return state;
  }

}

export default artistReducer
