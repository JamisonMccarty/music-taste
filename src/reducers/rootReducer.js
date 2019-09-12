import authReducer from './authReducer';
import artistReducer from './artistReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  artist:  artistReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer
