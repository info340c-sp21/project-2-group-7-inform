import React, { useState, useEffect }from 'react';
import { Container, Jumbotron } from 'reactstrap';
import firebase from 'firebase/app'

export default function MyCourses(props) {
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        const myCoursesRef = firebase.database().ref('mycourses')
        myCoursesRef.on('value', (snapshot) => {
            const myCourseObj = snapshot.val()
            if(myCourseObj != null) {
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
    
    if (myCourses.length === 0) return null;

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
				{myCourses.map((myCourseObj) => (
								<div
										href="#"
										className="course-cards d-flex align-items-stretch"
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
										</div> {/* end of 2 tags */}
									</div> {/* end of course description */}
								</div>
				))}
						</div>
					</div>
				</div>
			</>
			);
}
