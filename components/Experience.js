'use strict';

export default function renderExperience(exp) {
  let inner = ``;
  console.log(exp);
  inner += `<section id="experience"><h2 class="head">Experience</h2>`;
  exp.events.map((event) => {
    inner += `<div class="container-exp"><strong>${event.title}</strong> <br/> <div class="desc-exp">${event.description}</div> <br/> <div class="date-exp">${event.date}</div></div>`;
  });
  inner += `</section>`;
  return inner;
}
