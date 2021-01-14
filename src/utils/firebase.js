import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC_DuQJd0Dsw2bwiHP3gAqmljDtD2bVcQo',
  authDomain: 'birthays-app.firebaseapp.com',
  projectId: 'birthays-app',
  storageBucket: 'birthays-app.appspot.com',
  messagingSenderId: '370493726825',
  appId: '1:370493726825:web:7a2e79d0b2cd89d5fbc2f8',
};

export default firebase.initializeApp(firebaseConfig);
