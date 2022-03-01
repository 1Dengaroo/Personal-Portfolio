'use strict';

import Navbar from './Navbar.js';

// Checks if page parameter matches a project id. If yes then render the project page.
// The page parameter is ?page='project_id', which can be changed in the data.json file.
// If the project_id is changed, then the path in the .json must also be changed to
// index.html?page='new project_id'.

export default function renderProjectPage(page, project, project_ids) {
  Navbar(page, project);
  const containerID = document.querySelector('.container');
  let inner = ``;
  if (page === project_ids[0]) {
    inner += renderPandaProject(project);
  } else if (page === project_ids[1]) {
    inner += renderMeProject(project);
  }
  containerID.innerHTML += inner;
}

function renderPandaProject(project) {
  let inner = ``;
  inner += inner += `<div class="row">
          <h1 class="col-12" >This is my panda project!</h1>
        </div>
        <div class="row">
          <section id="panda">
          <div class="col-4">
            <img class="image" src="assets/panda.jpg" alt="panda!" />
          </div></section>
          <section id="description">
          <div class="col-7 ab">
            ${project[0].description}
          </div></section></div>
  
        <section id="back"><div class="row">
        <div class="col-12">
          <a class="back link--animation" href="index.html">Go back</a>
        </div></section></div></div>`;
  return inner;
}

function renderMeProject(project) {
  let inner = ``;
  inner += `<div class="row"><div class="col-12"><h1>More pictures of me!</h1></div></div>
        <section id="me">
        <div class="row">
          <div class="col-4">
            <img class="image" src="assets/me.jpg" alt="me" />
          </div>
          <div class="col-4">
            <img class="image" src="assets/me2.jpg" alt="me" />
          </div>
          <div class="col-4">
            <img class="image" src="assets/me3.jpg" alt="me" />
          </div></div></section>
        <section id="description">
        <div class="row">
          <p class="col-12">
          ${project[1].description}
          </p>
        </div></section>
        <section id="back">
        <div class="row">
          <div class="col-12">
            <a class="back link--animation" href="index.html">Go back</a>
          </div></section></div>`;
  return inner;
}
