// Daniel & Catherine

import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

export default function About(props) {

  let devCards = props.devs.map(dev => {
    return (
      <div className="col-md-6 col-xl-3 d-flex">
      <div className="row mx-auto my-4">
        <div className="col-sm-auto col-xl-12">
        <Developers dev={dev} img={dev.img}/>
        </div>
      </div>
      </div>);
  });

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
            {devCards}
          </div>
        </div>
      </div>
    </div>
       
  );
}


function Developers(props) {
  let devs = props.dev;

  return (
    <div className={`${devs.key}-profile col`}>
      <a href={devs.linkedin}>
        <img src={devs.img} alt={`${devs.key}`} className="rounded-circle shadow developersimg"/>
      </a>
      <h2 className="headertwo">{devs.name}</h2>
      <p>{`${devs.year} studying ${devs.major}`}</p>
    </div>
  );
}