'use strict';

fetch('assets/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // render HTML here
    const name = document.getElementById('nameid');
    const title = document.getElementById('titleid');
    const image = document.getElementById('imageid');
    name.innerHTML = `<h1>${data.about.name}</h1>`;
    title.innerHTML = `${data.about.title} <i class="fa-solid fa-graduation-cap"></i>`;
    image.src = `${data.about.photo}`;
  });

const p_filters = document.querySelectorAll('.project--filter');

for (let i = 0; i < p_filters.length; i++) {
  p_filters[i].addEventListener('click', function () {
    console.log(p_filters[i].textContent, 'filter button clicked');
  });
}
