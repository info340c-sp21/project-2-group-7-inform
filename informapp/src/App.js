import React from 'react';
import Filter from './Filter'
import CourseCard from './CourseCard'
import './style.css';
import CourseLog from './data/info_course.json'

function App() {
  return (
    // PUT COMPONENT IN DIV IF YOU WANT TO TEST IT/DISPLAY ON NPM START
    <div>
      If you want to test your component, just call it here!
      <Filter />
      <CourseCard courses={CourseLog}/>
      {/* IE: <Navbar /> etc etc. */}
    </div>
  );
}

export default App;
