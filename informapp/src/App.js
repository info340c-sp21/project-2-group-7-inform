import React from 'react';
import Filter from './Filter';
import CourseCard from './CourseCard';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import './style.css';
import CourseLog from './data/info_course.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START */}
      <div className="App">
        {/* If you want to test your component, just call it here! */}
        <Navbar />
        
        <Switch>
          <Route path="/courses"> 
            <Filter />
            <CourseCard courses={CourseLog}/>
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
        {/* IE: <Navbar /> etc etc. */}
      </div>
    </BrowserRouter>
  );
}

export default App;
