export const createArtist = (artist) => {
  return (dispatch, getState) => {
    // make async call to database
      dispatch({
        type: 'CREATE_ARTIST',
        artist: artist,
      })

  }
};
