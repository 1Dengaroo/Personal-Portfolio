'use strict';

export default function renderAbout(about) {
  let inner = ``;
  inner += `<section id="about"><div class="row">
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
  inner += `</ul></nav></div></div></div></section>`;
  return inner;
}
