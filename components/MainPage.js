'use strict';

import About from './About.js';
import Projects, { handleProjectFilter } from './Projects.js';
import News, { handleNewsFilter } from './News.js';
import Navbar from './Navbar.js';
import Experience from './Experience.js';

export default function renderMainPage(data) {
  Navbar('main', Object.keys(data));
  document.querySelector('.container').innerHTML = `
    <div class="name"><h1>${data.about.name}</h1></div>
    ${About(data.about)}
    <div class="row">
      ${Projects(data.projects)}
      ${News(data.news)}
    </div>
    <div>${Experience(data.experience)}</div>`;

  // Interactions
  handleProjectFilter(data.projects.projects);
  handleNewsFilter(data.news.events);
}
