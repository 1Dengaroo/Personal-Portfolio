'use strict';

fetch('assets/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    let project_ids = [];
    data.projects.projects.map((project) => {
      project_ids.push(project.project_id);
    });
    // Checks if page parameter matches a project id. If yes then render the project page.
    // The page parameter is ?page='project_id', which can be changed in the data.json file.
    // If the project_id is changed, then the path in the .json must also be changed to
    // index.html?page='new project_id'.
    if (project_ids.includes(page)) {
      renderProjectPage(page, data.projects.projects, project_ids);
    } else {
      // If not, render main page
      renderMainPage(data);
    }
  });

function renderNavbar(page, items = null) {
  const navbar = document.querySelector('.nav-bar');
  let project_ids = [];
  let inner = ``;
  inner += `<ul class="sections">`;
  items.map((project) => {
    project_ids.push(project.project_id);
  });
  if (project_ids.includes(page)) {
    // Checks if page parameter matches a project id
    items.map((project) => {
      if (project.project_id === page) {
        project.sections.map((sec) => {
          inner += `<li><a class="link--animation" href="#${sec}">${
            sec.charAt(0).toUpperCase() + sec.slice(1)
          }</a></li>`;
        });
      }
    });
  } else {
    // If no match, render main page navbar
    items.map((i) => {
      inner += `<li><a class="link--animation" href="#${i}">${
        i.charAt(0).toUpperCase() + i.slice(1)
      }</a></li>`;
    });
  }
  inner += `</li></ul>`;
  navbar.innerHTML = inner;
}

function renderProjectPage(page, project, project_ids) {
  renderNavbar(page, project);
  const containerID = document.querySelector('.container');
  let inner = ``;
  if (page === project_ids[0]) {
    inner += renderPandaProject(project);
  }
  if (page === project_ids[1]) {
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

function renderAbout(about) {
  let inner = ``;
  inner += `<div class="row">
    <div class="col-5">
      <img id="imageid" class="image" alt="picture" src="${about.photo}" />
    </div>
    <div class="col-7 ab">
      <h2 class="head">About <i class="fa-solid fa-address-card"></i></h2>
      <p style="margin-top: 0px">${about.description}</p>
      <p>${about.interests_desc}</p>
    </div></div>
    <div class="row">
    <div style="text-align: center" class="col-3">
      <div><strong>${about.title} <i class="fa-solid fa-graduation-cap"></i></strong><br />${about.email}<br />${about.address}<br />
        <nav>
          <ul class="links">`;
  about.links.map((l) => {
    inner += `<li>
    <a class="link--animation" href="${l.link}" target="_blank">${l.icon_class}${l.display}</i></a></li>`;
  });
  inner += `</ul></nav></div></div></div>`;
  return inner;
}

function renderNews(news) {
  let inner = ``;
  inner += `<h2 class="head">${news.id} <i class="fa-solid fa-newspaper"></i></h2>`;
  inner += `<ul class="list">`;
  news.events.map((e) => {
    inner += `<li>${e.title}<br /><span class="date">${e.date}</span></li>`;
  });
  inner += `</ul>`;
  return inner;
}

function renderProjects(projects) {
  let inner = ``;
  inner += `<h2 class="head"> Projects <i class="fa-solid fa-diagram-project"></i></h2>`;
  inner += renderProjectTags(projects);
  inner += renderProjectItems(projects);
  return inner;
}

function renderProjectTags(projects) {
  let inner = ``;
  inner += `<ul class="list filter--div">`;
  projects.tags.map((tag) => {
    inner += `<li><div class="project--filter ${tag.toLowerCase()}">${tag}</div></li>`;
  });
  inner += `</ul>`;
  return inner;
}

function renderProjectItems(projects) {
  let inner = ``;
  inner += `</ul><ul class="list">`;
  projects.projects.map((p) => {
    inner += `<div class="list-element-div">`;
    inner += `<li><a class="link--animation" href="${p.materials[0].path}">${p.title}</a></li>`;
    inner += `<div>${p.description}</div>`;
    inner += `<div><strong>Authors: </strong>${p.authors.join(', ')}</div>`;
    inner += `</li></div>`;
  });
  inner += `</ul>`;
  return inner;
}

function renderMainPage(data) {
  renderNavbar('main', Object.keys(data));
  const containerID = document.querySelector('.container');
  let inner = `
  <div class="row">
    <div class="name col-12"><h1>Andy Deng</h1></div>
  </div>
  <section id="about">${renderAbout(data.about)}</section>
  <br />
  <div class="row">
    <section id="projects" class="col-8">${renderProjects(
      data.projects
    )}</section>
    <section id="news" class="col-4">${renderNews(data.news)}</section>
  </div>`;
  containerID.innerHTML += inner;
  addFilterBtns();
}

function addFilterBtns() {
  // NOT YET IMPLEMENTED
  const p_filters = document.querySelectorAll('.project--filter');

  for (let i = 0; i < p_filters.length; i++) {
    p_filters[i].addEventListener('click', () => {
      console.log(p_filters[i].textContent, 'filter button clicked');
    });
  }
}
