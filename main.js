const homeEl = document.querySelector('h1');
const btn1 = document.querySelectorAll('button')[0];
const btn2 = document.querySelectorAll('button')[1];
const btn3 = document.querySelectorAll('button')[2];
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const page4 = document.querySelector('#page4');

homeEl.addEventListener('click', (e) => {
  page1.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

btn1.addEventListener('click', (e) => {
  page2.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
btn2.addEventListener('click', (e) => {
  page3.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
btn3.addEventListener('click', (e) => {
  page4.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
