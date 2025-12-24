'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const leftBorder = (window.innerWidth - wall.clientWidth) / 2;
const topBorder = (window.innerHeight - wall.clientHeight) / 2;

document.addEventListener('click', (e) => {
  // write code here

  spider.style.left = e.clientX - leftBorder - spider.clientWidth / 2 + 'px';
  spider.style.top = e.clientY - topBorder - spider.clientHeight / 2 + 'px';

  const leftPos = e.clientX - leftBorder - spider.clientWidth / 2;
  const topPos = e.clientY - topBorder - spider.clientHeight / 2;

  if (leftPos < 0) {
    spider.style.left = 0;
  }

  if (topPos < 0) {
    spider.style.top = 0;
  }

  if (leftPos + spider.clientWidth / 2 > wall.clientWidth) {
    spider.style.left = wall.clientWidth - spider.clientWidth + 'px';
  }

  if (topPos + spider.clientHeight / 2 > wall.clientHeight) {
    spider.style.top = wall.clientHeight - spider.clientHeight + 'px';
  }
});
