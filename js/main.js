const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const closedBtn = document.querySelector('.closed-btn');
const body = document.querySelector('.body')

burger.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('body-active');
})

closedBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('body-active');
})
