import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyA03yFx9GUxYgcOuDJbp75w0lC7KDgxw7o",
  authDomain: "admindashboard-7064a.firebaseapp.com",
  projectId: "admindashboard-7064a",
  storageBucket: "admindashboard-7064a.appspot.com",
  messagingSenderId: "444949866641",
  appId: "1:444949866641:web:38b171d760753280563730",
  measurementId: "G-46QNCQ55KP"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;