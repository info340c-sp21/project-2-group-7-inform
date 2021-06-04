// Ian and Leon
import React, { useState } from "react";
import Filter from './Filter';
import CourseCard from './CourseCard';

function Courses(props) {
    const [filteredTrack, setFilteredTrack] = useState([
    // 'BIO', 'DS', 'HCI', 'IA', 'IAC'
      'HCI', 'DS'
    ]);
    console.log(filteredTrack);

    const [filteredQuarter, setFilteredQuarter] = useState([
    // 'SU21', 'AU21','WI22', 'SP22'
      'AU21'
    ]);
    console.log(filteredQuarter);

    const [filteredOffering, setFilteredOffering] = useState([
    // 'INFO', 'NON-INFO'
      'INFO'
    ]); 
    console.log(filteredOffering);

    // if (filteredTrack.length === 0 && filteredQuarter.length === 0 && filteredOffering.length === 0) {
    //   setFilteredTrack('HCI');
    //   setFilteredQuarter('AU21');
    //   setFilteredOffering('INFO');

    // }

    const courseFilter = {filteredTrack, filteredQuarter, filteredOffering}
    // const courseFilterProps = {filteredTrack, filteredQuarter, filteredOffering, setFilteredTrack, setFilteredQuarter, setFilteredOffering};


    return(
      <div>
        <Filter filteredTrack={filteredTrack} 
          setFilteredTrack={setFilteredTrack} 
          filteredQuarter={filteredQuarter}
          setFilteredQuarter={setFilteredQuarter} 
          filteredOffering={filteredOffering} 
          setFilteredOffering={setFilteredOffering}  />
        <CourseCard courses={props.courses} dropdownSelection={courseFilter}/>  
      </div>
    );
}

export default Courses;
