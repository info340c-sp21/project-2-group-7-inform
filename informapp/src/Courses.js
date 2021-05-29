// Ian and Leon
import React, { useState } from "react";
import Filter from './Filter';
import CourseCard from './CourseCard';

function Courses(props) {
    const [filteredTrack, setFilteredTrack] = useState([
        'BIO', 'DS', 'HCI', 'IA', 'IAC'
    ]);
    console.log(filteredTrack);

    const [filteredQuarter, setFilteredQuarter] = useState([
    'SU21', 'AU21','WI22', 'SP22'
    ]);
    console.log(filteredQuarter);

    const [filteredOffering, setFilteredOffering] = useState([
    'INFO', 'NON-INFO'
    ]); 
    console.log(filteredOffering);

    // const courseFilterProps = {filteredTrack, filteredQuarter, filteredOffering, setFilteredTrack, setFilteredQuarter, setFilteredOffering};


    return(
      <div>
        <Filter filteredTrack={filteredTrack} 
          setFilteredTrack={setFilteredTrack} 
          filteredQuarter={filteredQuarter}
          setFilteredQuarter={setFilteredQuarter} 
          filteredOffering={filteredOffering} 
          setFilteredOffering={setFilteredOffering}  />
        <CourseCard courses={props.courses} />  
      </div>
    );
}

export default Courses;
