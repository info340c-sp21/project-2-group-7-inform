import React, { useState, useEffect } from 'react';
// import Filter from './Filter';
// import CourseCard from './CourseCard';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Courses from './Courses';
import MyCourses from './MyCourse';
import './style.css';
import CourseLog from './data/info_course.json';
import DevLog from './data/G7team.json'
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//FirebaseUI config
const uiConfig = {
  //which sign in providers to use
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, 
      // where to show the "display name" on the sign in page
      requireDisplayName: true
    }, // each object is a signin method

    firebase.auth.GoogleAuthProvider.PROVIDER_ID // log in with Google
  ],
  // page won't show the account chooser
  credentialHelper: 'none',
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        console.log("Logged in as " + firebaseUser.displayName);
        setUser(firebaseUser);
        setIsLoading(false);
      } else {
        console.log("Logged out!");
        setUser(null);
        setIsLoading(false);
      }
      console.log("auth state has changed");
    })

    return function cleanup() {
      authUnregisterFunction();
    }
  }, [])

  const handleSignOut = () => {
    setErrorMessage(null);
    firebase.auth().signOut();
  }

  if (isLoading) {
    return (
      <div className = "text-center">
        <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
      </div>
    )
  }

  let content = null;

  if(!user) {
    content = (
      <div className="container">
        <div className="headerone">INFOrm Signup Page</div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
  } else {
    content = (
      <HashRouter>
      {/* // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START */}
      {/* IAN TEST */}
      <div className="App">
        {/* If you want to test your component, just call it here! */}
        <div className="header">
          {user &&
          <Navbar event={handleSignOut} user={user.displayName}/>}
        </div>
        
        <div className="main">
          <Switch>
            <Route path ="/mycourses">
              <MyCourses />
            </Route>

            <Route path="/about">
              <About devs={DevLog}/>
            </Route>
            
            <Route path="/"> 
              <div className="text-align-center">
                <Courses courses={CourseLog} />
              </div>
              {/* <Filter /> 
              <CourseCard courses={CourseLog}/> */}
            </Route>
            
          </Switch>

        </div>

        <Footer />
        {/* IE: <Navbar /> etc etc. */}
      </div>
    </HashRouter>
    );
  }

  return (
    <div>
      {errorMessage &&
        <p className="alert alert-danger">{errorMessage}</p>
      }
      {content}
    </div>
  )
}

export default App;
