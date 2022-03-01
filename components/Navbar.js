'use strict';

export default function renderNavbar(page, items = null) {
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
