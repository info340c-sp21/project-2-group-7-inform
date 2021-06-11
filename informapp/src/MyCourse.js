import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Button, Modal, ModalBody } from 'reactstrap';
import firebase from 'firebase/app'

export default function MyCourses(props) {
	const [myCourses, setMyCourses] = useState([]);
	const [tempCourses, setTempCourse] = useState([]);
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	

	useEffect(() => {
		let user = firebase.auth().currentUser.displayName;
		const myCoursesRef = firebase.database().ref(user);
		myCoursesRef.on('value', (snapshot) => {
			const myCourseObj = snapshot.val()
			if (myCourseObj != null) {
				let objectKeyArray = Object.keys(myCourseObj)
				let courseArray = objectKeyArray.map((key) => {
					let singleCourseObj = myCourseObj[key]
					singleCourseObj.key = key
					return singleCourseObj;
				})
				
				setMyCourses(courseArray);
			}
		})
	}, [])

	// let myCourseItems = [];
	// return <myCourseItem key={myCourseObj.key} course={myCourseObj} currentUser={props.currentUser} />;
	return (
		<>
			<div className="about">
				<Jumbotron >
					<Container>
						<h1 className="headerone">My Courses</h1>
						<p className="lead aboutp">
							Courses selected will be displayed here
						</p>
					</Container>
				</Jumbotron>
			</div>
			<div className="text-align-center"> 
				<div className="container">
					<div className="card-container row justify-content-md-center footer-bottom">
						{myCourses.length === 0 ? console.log("TEST") : myCourses.map((myCourseObj) => (
							<div
								href="#"
								className="course-cardstwo d-flex align-items-stretch"
								data-toggle="modal"
								data-target={`#${myCourseObj.coursePre}`}
							>
								<div className={`course-name course-image-${myCourseObj.image}`}>
									<div className="course-name-wrap">
										<h1 className="card-h1">{`${myCourseObj.coursePre}`}</h1>
									</div>
								</div>

								<div className="course-description">
									<h2 className="headertwo">{`${myCourseObj.header}`}</h2>

									<div className="course-tags">
										<div className="tag">
											<p>{myCourseObj.track}</p>
										</div>
										<div className="tag">
											<p>{myCourseObj.major}</p>
										</div>
										<Button onClick={() => {window.open(myCourseObj.url, "_blank")}} className="tag">
											<p> Visit UW Course Page </p> 
										</Button>
										<Button className="tag" onClick={() => { toggle(); RemoveCourse(myCourseObj); setTempCourse(myCourseObj); reloadPage(); }}>
											<p>Remove Course</p>
										</Button>
										{modal === true ? <RemoveModal modalDisplay={modal} modalToggle={toggle} courseName={tempCourses.header} myCourseArray={myCourses} /> : ''}
									</div> 
								</div> 
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

function reloadPage() {
	window.location.reload();
	return (
		<div className = "text-center">
			<i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
		</div>
	)
}

function RemoveModal(props) {
	return (
		<Modal isOpen={props.modalDisplay} toggle={props.modalToggle} centered={true}>
			<ModalBody>
				<p>Successfully removed <b>{props.courseName}</b> to your list!</p>
			</ModalBody>
		</Modal>
	)
}

function RemoveCourse(singleCourse) {
	let user = firebase.auth().currentUser.displayName;
	const coursesRef = firebase.database().ref(user);
	coursesRef.on('value', (snapshot) => {
		const courseObj = snapshot.val()
		if (courseObj != null) {
			let objectKeyArrays = Object.keys(courseObj)
			objectKeyArrays.map((key) => {
				if(singleCourse.key === key) {
					coursesRef.child(key).remove();
				}
				return coursesRef;
			})
		}
	})
}