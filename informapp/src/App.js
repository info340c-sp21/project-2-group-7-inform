import React from 'react';
import Filter from './Filter';
import CourseCard from './CourseCard';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import './style.css';
import CourseLog from './data/info_course.json';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {/* // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START */}
      {/* IAN TEST */}
      <div className="App">
        {/* If you want to test your component, just call it here! */}
        <Navbar />
        
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          
          <Route path="/"> 
            <Filter />
            <CourseCard courses={CourseLog}/>
          </Route>

        </Switch>

        <Footer />
        {/* IE: <Navbar /> etc etc. */}
      </div>
    </HashRouter>
  );
}

export default App;
