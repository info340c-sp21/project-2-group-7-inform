// Daniel & Catherine

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
        <Jumbotron style = {{backgroundColor: '#e9ecef'}}>
          <Container>
            <h1 className="headerone">About</h1>
            <p className="lead aboutp">
              Welcome to INFOrm! Developed by iSchool students at the University of 
              Washington, INFOrm is an all-in-one web-app designed for both current and future Informatics students
              to help search and plan for both in-major and pre-approved courses. 
            </p>
            &nbsp;
          </Container>
        </Jumbotron>
      </div>

      <div class="container">
        <div class="developers">
        &nbsp;
          <h1 class="align-items-start headerone">INFOrm Team</h1>
          <div class="row justify-content-md-center text-align-center">
              <div class="ians-profile col">
                <a href="https://www.linkedin.com/in/ianywang" target="_blank"
                  ><img
                    src={Ian}
                    class="rounded-circle shadow"
                    alt="ian's profile picture"
                /></a>
                <h2 className="headertwo">Ian Wang</h2>
                <p>Freshman studying Informatics</p>
              </div>
  
              <div class="leons-profile col">
                <a href="https://www.linkedin.com/in/leon-kan/" target="_blank"
                  ><img
                    src={Leon}
                    class="rounded-circle shadow"
                    alt="leon's profile picture"
                /></a>
                <h2 className="headertwo">Leon Kan</h2>
                <p>Junior studying Informatics</p>
              </div>

              <div class="catherines-profile col">
                <a href="https://www.linkedin.com/in/catherinemiao2022/" target="_blank"
                  ><img
                    src={Catherine}
                    class="rounded-circle shadow"
                    alt="catherine's profile picture"
                /></a>
                <h2 className="headertwo">Catherine Miao</h2>
                <p>Junior studying Business and Informatics</p>
              </div>

              <div class="daniels-profile col">
                <a href="https://www.linkedin.com/in/danielmiau12/" target="_blank"
                  ><img
                    src={Daniel}
                    class="rounded-circle shadow"
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
