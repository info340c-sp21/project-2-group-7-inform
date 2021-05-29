// Ian & Leon
import "./style.css";
import React from "react";
// import CourseModal from "./CourseModal";

function CourseCard(props) {
  let dropdownFilters = props.dropdownSelection;
  // console.log(dropdownFilters.filteredTrack);
  // console.log("dropdown filters:");
  // console.log(dropdownFilters);

  let courseLogData = props.courses;
  // console.log(CourseLogData);

  // let trackSelection = Object.values(courseLogData).filter(oneCourse => oneCourse.Track === "BIO"); // for debugging purpose
  // console.log(trackSelection);
  
  let selectedCourses = [];
  // loop courses, use each course to find its match in filter options
  for (let oneCourse of courseLogData) {

    // loop thru all selected filter options
    for (let oneFilterItem of dropdownFilters.filteredTrack) { // iterate `track` filter
      // check if current course contains in `selectedCourses`
      if(oneCourse.Track === oneFilterItem && !selectedCourses.includes(oneCourse)) {
        selectedCourses.push(oneCourse);
      }
    }
    // // loop thru all selected filter options
    // for (let oneFilterItem of dropdownFilters.filteredOffering) { // iterate `track` filter
    //   // check if current course contains in `selectedCourses`
    //   if(oneCourse.InMajor === oneFilterItem ) {
    //     selectedCourses.push(oneCourse);
    //   }
    // }
  }

  for (let oneCourse of courseLogData) {

    // loop thru all selected filter options
    for (let oneFilterItem of dropdownFilters.filteredQuarter) { // iterate `track` filter
      // check if current course contains in `selectedCourses`
      if(oneCourse.Quarter === oneFilterItem && !selectedCourses.includes(oneCourse)) {
        selectedCourses.push(oneCourse);
      }
    }
  }
      

  // lastly render `selectedCourses` into cards
  console.log("selected courses", selectedCourses);
  
  return (
    <div className="text-align-center">
      <div className="container">
        <div className="card-container row justify-content-md-center">
          <CardContent courses={selectedCourses}/>
        </div>
      </div>
    </div>
  );
}

function CardContent(props) { // <- pass course data as props
  let allCourses = props.courses.map((course) => {
    return (
      <>
        <div
          href="#"
          className="course-cards d-flex align-items-stretch"
          data-toggle="modal"
          data-target={`#${course.CoursePrefix}${course.CourseNumber}`}
        >
          <div className={`course-name course-image-${course.CourseImage}`}>
            <div className="course-name-wrap">
              <h1 className="card-h1">{`${course.CoursePrefix} ${course.CourseNumber}`}</h1>
            </div>
          </div>

          <div className="course-description">
            <h2 className="headertwo">{course.CourseTitle}</h2>

            <div className="course-tags">
              <div className="tag">
                <p>{course.Track}</p>
              </div>
              <div className="tag">
                <p>{course.InMajor}</p>
              </div>
            </div> {/* end of 2 tags */}
          </div> {/* end of course description */}
        </div>
        {/* <CourseModal /> need `props` */}
      </>
    );
  })
  return allCourses;
}


export function GetData(props) {
  let thing = props.data;
  return (
    console.log(thing)
  );
}
export default CourseCard;
