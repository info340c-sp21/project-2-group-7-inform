// Ian & Leon
import "./style.css";
import React from "react";
// import CourseModal from "./CourseModal";

function CourseCard(props) {
  let dropdownFilters= props.dropdownSelection;
  console.log(dropdownFilters);

  let data = props.courses;
  console.log(data);

  let trackSelection = Object.values(dropdownFilters)[0].filter(trackSelection => trackSelection.Track === "BIO");
  console.log(trackSelection);





  return (
    <div className="text-align-center">
      <div className="container">
        <div className="card-container row justify-content-md-center">
          <CardContent courses={props.courses}/>
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
