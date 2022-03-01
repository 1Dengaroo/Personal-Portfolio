'use strict';

export default function renderProjects(projects) {
  let inner = ``;
  inner += `<section id="projects" class="col-8"><h2 class="head"> Projects <i class="fa-solid fa-diagram-project"></i></h2>`;
  inner += renderProjectTags(projects);
  inner += `<div class="project-list">${renderProjectItems(
    projects.projects
  )}</div></section>`;
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
  projects.map((p) => {
    inner += `<div class="list-element-div">`;
    inner += `<a class="link--animation" href="${p.materials[0].path}">${p.title}</a></li>`;
    inner += `<div>${p.description}</div>`;
    inner += `<div><strong>Authors: </strong>${p.authors.join(', ')}</div>`;
    inner += `<div><strong>Tags: </strong>${p.tags.join(', ')}</div>`;
    inner += `</div>`;
  });
  return inner;
}

export function handleProjectFilter(projects) {
  const p_filters = document.querySelectorAll('.project--filter');

  for (let i = 0; i < p_filters.length; i++) {
    p_filters[i].addEventListener('click', () => {
      const tag = p_filters[i].textContent;
      const projectEl = document.querySelector('.project-list');
      let newProjects = [];
      projects.forEach((project) => {
        if (project.tags.includes(tag)) {
          newProjects.push(project);
        }
      });
      projectEl.innerHTML = renderProjectItems(newProjects);
      for (let j = 0; j < p_filters.length; j++) {
        p_filters[j].classList.remove('project--filer--active');
      }
      p_filters[i].classList.add('project--filer--active');
    });
  }
}
