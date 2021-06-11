// Ian & Leon
import "./style.css";
import React, { useState } from "react";
// import CourseModal from "./CourseModal"; // Temporarily muted
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import firebase from 'firebase';

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
        <div className="card-container row justify-content-md-center footer-bottom">
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
  const [modalPrefix, setModalPrefix] = useState ('');
  const [modalImg, setModalImg] = useState ('');
  const [modalName, setModalName] = useState('');
  const [modalURL, setModalURL] = useState('');

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

  const updateModalPrefix = (e) => {
    setModalPrefix({
      ...modalPrefix,
      e
    });
  };

  const updateModalImg = (e) => {
    setModalImg({
      ...modalImg,
      e
    });
  };

  const updateModalName = (e) => {
    setModalName({
      ...modalName,
      e
    });
  };

  const updateModalURL = (e) => {
    setModalURL({
      ...modalURL,
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
                          updateModalTrack(`${course.Track}`);
                          updateModalPrefix(`${course.CoursePrefix} ${course.CourseNumber}`);
                          updateModalImg(`${course.CourseImage}`);
                          updateModalName(`${course.CourseTitle}`);
                          updateModalURL(`${course.CourseURL}`);
                        }}
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
      ))}
      {modal === true ? <CardModal modalDisplay={modal} clickEvent={toggle} prefix={modalPrefix.e} img={modalImg.e} name={modalName.e} header={modalHeader.e} content={modalContent.e} track={modalTrack.e} major={modalMajor.e} url={modalURL.e}/> : ''}
      </>
    )
}

function CardModal (props) {
  const [modal, setModal] = useState(false);  
  const toggle = () => setModal(!modal);

  // add a new course to the database
  const addCourse = (event) => {

    let user = firebase.auth().currentUser.displayName;
    // adding a user's added course to the database
    const newAddedCourse = {
      coursePre: props.prefix,
      major: props.major,
      header: props.name,
      description: props.content,
      track: props.track,
      image: props.img,
      url: props.url,
      userID: user
    }

    const mycoursesRef = firebase.database().ref(user);

    mycoursesRef.push(newAddedCourse);
  }

  return(
    <Modal isOpen={props.modalDisplay} toggle={props.clickEvent} centered={true}>
      <ModalHeader className="headerone modal-header" toggle={props.clickEvent}>{props.header}</ModalHeader>
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
        <Button onClick={() => {window.open(props.url, "_blank")}} className="tag">
          <p> Visit UW Course Page </p> 
        </Button>
        <Button onClick={() => {toggle(); addCourse();}} className="tag">
          <p>Add Course</p>
        </Button>
        <SuccessModal modalDisplay={modal} modalToggle={toggle} courseName={props.header}/>
      </div>
      </ModalFooter>
    </Modal>  
  );
}

// function test(props) {
//   console.log(props);
// }
function SuccessModal (props) {
  
  return(
    <Modal isOpen={props.modalDisplay} toggle={props.modalToggle} centered={true}>
      <ModalBody>
        <p>Successfully added <b>{props.courseName}</b> to your list!</p>
      </ModalBody>
    </Modal>
  )
}

export function GetData(props) {
  let thing = props.data;
  return (
    console.log(thing)
  );
}

export default CourseCard;
