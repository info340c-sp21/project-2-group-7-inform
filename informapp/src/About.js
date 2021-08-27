// import React from 'react';
// import { Container, Jumbotron } from 'reactstrap';

// export default function About(props) {

//   let devCards = props.devs.map(dev => {
//     return (
//       <div className="col-md-6 col-xl-3 d-flex">
//         <div className="row mx-auto my-4">
//           <div className="col-sm-auto col-xl-12">
//             <Developers dev={dev} img={dev.img} />
//           </div>
//         </div>
//       </div>);
//   });

//   return (
//     <div className="text-align-left">
//       <div className="about">
//         <Jumbotron >
//           <Container>
//             <h1 className="headerone">About</h1>
//             <p className="lead aboutp">
//               Welcome to INFOrm! Developed by iSchool students at the University of
//               Washington, INFOrm is an all-in-one web-app designed for both current and future Informatics students
//               to help search and plan for both in-major and pre-approved courses.
//             </p>
//           </Container>
//         </Jumbotron>
//       </div>
//       <div className="container pt-5">
//         <div className="developers">
//           &nbsp;
//           <h1 className="align-items-start headerone">INFOrm Team</h1>
//           <div className="row justify-content-md-center text-align-center footer-bottom">
//             {devCards}
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }

// function Developers(props) {
//   let devs = props.dev;

//   return (
//     <div className={`${devs.key}-profile col`}>
//       <a href={devs.linkedin}>
//         <img src={devs.img} alt={`${devs.key}`} className="rounded-circle shadow developersimg" />
//       </a>
//       <h2 className="headertwo">{devs.name}</h2>
//       <p>{`${devs.year} studying ${devs.major}`}</p>
//     </div>
//   );
// }

import React, { Component } from 'react';
import Ian from './img/ian_profile1.jpeg';
import Leon from './img/leons_profile1.png';
import Catherine from './img/catherine_profile1.jpg';
import Daniel from './img/daniel_profile1.jpg';
import { Container, Jumbotron } from 'reactstrap';

export default function About() {
  return (
    <div className="text-align-left">
      <div className="about">
        <Jumbotron >
          <Container>
            <h1 className="headerone">About</h1>
            <p className="lead aboutp">
              Welcome to INFOrm! Developed by iSchool students at the University of 
              Washington, INFOrm is an all-in-one web-app designed for both current and future Informatics students
              to help search and plan for both in-major and pre-approved courses. 
            </p>
          </Container>
        </Jumbotron>
      </div>

      <div className="container pt-5">
        <div className="developers">
        &nbsp;
          <h1 className="align-items-start headerone">INFOrm Team</h1>
          <div className="row justify-content-md-center text-align-center footer-bottom">
              <div className="ians-profile col">
                <a href="https://www.linkedin.com/in/ianywang" target="_blank"
                  ><img
                    src={Ian}
                    className="rounded-circle shadow developersimg"
                    alt="ian's profile picture"
                /></a>
                <h2 className="headertwo">Ian Wang</h2>
                <p>Freshman studying Informatics</p>
              </div>
  
              <div className="leons-profile col">
                <a href="https://www.linkedin.com/in/leon-kan/" target="_blank"
                  ><img
                    src={Leon}
                    className="rounded-circle shadow developersimg"
                    alt="leon's profile picture"
                /></a>
                <h2 className="headertwo">Leon Kan</h2>
                <p>Junior studying Informatics</p>
              </div>

              <div className="catherines-profile col">
                <a href="https://www.linkedin.com/in/catherinemiao2022/" target="_blank"
                  ><img
                    src={Catherine}
                    className="rounded-circle shadow developersimg"
                    alt="catherine's profile picture"
                /></a>
                <h2 className="headertwo">Catherine Miao</h2>
                <p>Junior studying Business and Informatics</p>
              </div>

              <div className="daniels-profile col">
                <a href="https://www.linkedin.com/in/danielmiau12/" target="_blank"
                  ><img
                    src={Daniel}
                    className="rounded-circle shadow developersimg"
                    alt="daniel's profile picture"
                /></a>
                <h2 className="headertwo">Daniel Miau</h2>
                <p>Junior studying Informatics</p>
              </div>
          </div>
        </div>
      </div>
    </div>
       
  );
}