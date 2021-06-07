// Ian & Leon
import "./style.css";
import React, { useState } from "react";
// import CourseModal from "./CourseModal"; // Temporarily muted
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CourseCard(props) {
  let dropdownFilters = props.dropdownSelection;
  let courseLogData = props.courses;
  // for debugging purpose
  // let trackSelection = Object.values(courseLogData).filter(oneCourse => oneCourse.Track === "BIO");
  // console.log(trackSelection);
  
  let selectedCoursesTrack = [];
  let selectedCoursesQrt = [];
  let selectedCoursesINFO = [];
  // loop courses, use each course to find its match in filter options
  for (let oneCourse of courseLogData) {
    // loop thru all selected filter options
    for (let oneFilterItem of dropdownFilters.filteredTrack) { // iterate `track` filter
      // check if current course contains in `selectedCourses`
      if(oneCourse.Track === oneFilterItem && !selectedCoursesTrack.includes(oneCourse)) {
        selectedCoursesTrack.push(oneCourse);
      }
    }
  }
  console.log("first:", selectedCoursesTrack);

  for (let oneCourse of selectedCoursesTrack) {
    // loop thru all selected filter options
    for (let oneFilterItem of dropdownFilters.filteredQuarter) { // iterate `quarter` filter
      // check if current course contains in `selectedCourses`
      if(oneCourse.Quarter.includes(oneFilterItem) && !selectedCoursesQrt.includes(oneCourse)) {
        selectedCoursesQrt.push(oneCourse);
      }
    } // inner for loop
  } // outer for loop
  console.log("second:", selectedCoursesQrt);

  for (let oneCourse of selectedCoursesQrt) {
    // loop thru all selected filter options
    for (let oneFilterItem of dropdownFilters.filteredOffering) { // iterate `offering` filter
      // check if current course contains in `selectedCourses`
      if(oneCourse.InMajor===(oneFilterItem) && !selectedCoursesINFO.includes(oneCourse)) {
        selectedCoursesINFO.push(oneCourse);
      }
    }
  }
  console.log("third:", selectedCoursesINFO);

  // lastly render `selectedCourses` into cards
  // console.log("selected courses", selectedCourses);
  
  return (
    <div className="text-align-center">
      <div className="container">
        <div className="card-container row justify-content-md-center">
          <CardContent courses={selectedCoursesINFO}/>
        </div>
      </div>
    </div>
  );
}

function CardContent(props) { // <- pass course data as props
  const [modal, setModal] = useState(false);  
  const [modalHeader, setModalHeader] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalTrack, setModalTrack] = useState ('');
  const [modalMajor, setModalMajor] = useState ('');

  const toggle = () => setModal(!modal);

  const updateModalHeader = (e) => {
    setModalHeader({
      ...modalHeader,
      e
    });
  };

  const updateModalContent = (e) => {
    setModalContent({
      ...modalContent,
      e
    });
  };

  const updateModalTrack = (e) => {
    setModalTrack({
      ...modalTrack,
      e
    });
  };

  const updateModalMajor = (e) => {
    setModalMajor({
      ...modalMajor,
      e
    });
  };

  // function thing(d) {
  //   console.log(`${d.CoursePrefix} ${d.CourseNumber}`);
  // }

    return (    
      <> 
      {props.courses.map((course) => (
        <div
          className="course-cards d-flex align-items-stretch"
          data-toggle="modal"
          value={course.CoursePrefix}
          name="prefix"
          onClick={() => {toggle(); 
                          updateModalHeader(`${course.CoursePrefix}${course.CourseNumber} ${course.CourseTitle}`);
                          updateModalContent(`${course.CourseDescription}`); 
                          updateModalMajor(`${course.InMajor}`); 
                          updateModalTrack(`${course.Track}`)}}
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
              <div>
              </div>
            </div> {/* end of 2 tags */}
          </div> {/* end of course description */}
        </div>
      ))}
      {modal == true ? <CardModal modalDisplay={modal} clickEvent={toggle} header={modalHeader.e} content={modalContent.e} track={modalTrack.e} major={modalMajor.e}/> : ''}
      </>
    )
}

function CardModal (props) {
  return(
    <Modal isOpen={props.modalDisplay} toggle={props.clickEvent} centered={true}>
    <ModalHeader className="headerone" toggle={props.clickEvent}>{props.header}</ModalHeader>
    <ModalBody className="p">
      {props.content}
    </ModalBody>
    <ModalFooter>
    <div className="course-tags">
      <div className="tag">
        <p>{props.track}</p>
      </div>
      <div className="tag">
        <p>{props.major}</p>
      </div>
    </div>
    </ModalFooter>
    </Modal>  
  );
}

export function GetData(props) {
  let thing = props.data;
  return (
    console.log(thing)
  );
}
export default CourseCard;
