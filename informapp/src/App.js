import React from 'react';
import Filter from './Filter';
import CourseCard from './CourseCard';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import './style.css';
import CourseLog from './data/info_course.json';

function App() {
  return (
    // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START
    <div>
      {/* If you want to test your component, just call it here! */}
      <Navbar />
      <Filter />
      <CourseCard courses={CourseLog}/>
      <About />
      <Footer />
      {/* IE: <Navbar /> etc etc. */}
    </div>
  );
}

export default App;
