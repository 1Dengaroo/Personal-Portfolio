'use strict';

export default function renderNews(news) {
  let inner = ``;
  inner += `<section id="news" class="col-4"><h2 class="head">${news.id} <i class="fa-solid fa-newspaper"></i></h2>`;
  inner += `
    <div class="search">
      <input type="search" name="news" placeholder="Search News..."></input>
    </div>`;
  inner += `<div class="news-list">${renderNewsItems(
    news.events
  )}</div></section>`;
  return inner;
}

function renderNewsItems(events) {
  let inner = ``;
  events.map((e) => {
    inner += `<div>${e.title}<br /><span class="date">${e.date}</span></div>`;
  });
  return inner;
}

export function handleNewsFilter(events) {
  document
    .querySelector('.search input[name="news"]')
    .addEventListener('input', (e) => {
      const value = e.target.value;
      const newsEl = document.querySelector('.news-list');
      let newEvents = [];
      events.forEach((event) => {
        if (
          event.title.toLowerCase().includes(value.toLowerCase()) ||
          event.date.toLowerCase().includes(value.toLowerCase())
        ) {
          newEvents.push(event);
        }
      });
      newsEl.innerHTML = renderNewsItems(newEvents);
    });
}
