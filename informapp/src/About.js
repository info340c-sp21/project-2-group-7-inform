'use strict';
// Daniel & Catherine

import React, { Component } from 'react';
import Ian from './img/ian_profile1.jpeg';
import Leon from './img/leons_profile1.png';
import Catherine from './img/catherine_profile1.jpg';
import Daniel from './img/daniel_profile1.jpg';

export default function About() {
  return (
    <div class="text-align-left">
      <div class="about">
        <div class="jumbotron">
          <div class="container">
            <h1>About</h1>
            <p class="lead">
              INFOrm is an all-in-one web-app designed for Informatics students
              to help search and plan for both in-major and pre-approved
              courses.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="developers">
          <h1 class="align-items-start">INFOrm Team</h1>
          <div class="row justify-content-md-center text-align-center">
              <div class="ians-profile col">
                <a href="https://www.linkedin.com/in/ianywang" target="_blank"
                  ><img
                    src={Ian}
                    class="rounded-circle shadow"
                    alt="ian's profile picture"
                /></a>
                <h2>Ian Wang</h2>
                <p>Freshman studying Informatics</p>
              </div>
  
              <div class="leons-profile col">
                <a href="https://www.linkedin.com/in/leon-kan/" target="_blank"
                  ><img
                    src={Leon}
                    class="rounded-circle shadow"
                    alt="leon's profile picture"
                /></a>
                <h2>Leon Kan</h2>
                <p>Junior studying Informatics</p>
              </div>

              <div class="catherines-profile col">
                <a href="https://www.linkedin.com/in/catherinemiao2022/" target="_blank"
                  ><img
                    src={Catherine}
                    class="rounded-circle shadow"
                    alt="catherine's profile picture"
                /></a>
                <h2>Catherine Miao</h2>
                <p>Junior studying Business and Informatics</p>
              </div>

              <div class="daniels-profile col">
                <a href="https://www.linkedin.com/in/danielmiau12/" target="_blank"
                  ><img
                    src={Daniel}
                    class="rounded-circle shadow"
                    alt="daniel's profile picture"
                /></a>
                <h2>Daniel Miau</h2>
                <p>Junior studying Informatics</p>
              </div>
          </div>
        </div>
      </div>
    </div>
       
  );
}
