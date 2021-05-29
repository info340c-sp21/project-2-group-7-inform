import React from 'react';
// import Filter from './Filter';
// import CourseCard from './CourseCard';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Courses from './Courses';
import './style.css';
import CourseLog from './data/info_course.json';
import DevLog from './data/G7team.json'
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {/* // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START */}
      {/* IAN TEST */}
      <div className="App">
        {/* If you want to test your component, just call it here! */}
        <div className="header">
            <Navbar />
        </div>
        <div className="main">
          <Switch>
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

export default App;
