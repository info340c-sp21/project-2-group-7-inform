import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/auth'; 
import 'firebase/database';

//import bootstrap style & style css
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: "AIzaSyCitttVZ-uDOMbjXAVlpGdVNxWngPEBtIg",
  authDomain: "inform-8c49f.firebaseapp.com",
  projectId: "inform-8c49f",
  storageBucket: "inform-8c49f.appspot.com",
  messagingSenderId: "1054156376758",
  appId: "1:1054156376758:web:420bc10084092e096c7417",
  measurementId: "G-7T3GYQEQGZ"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
