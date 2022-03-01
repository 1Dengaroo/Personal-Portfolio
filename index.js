'use strict';

import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';

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
    if (project_ids.includes(page)) {
      ProjectPage(page, data.projects.projects, project_ids);
    } else {
      MainPage(data);
    }
  });
