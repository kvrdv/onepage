// для Скрыть/показать все проекты:
const buttonLess = document.querySelectorAll('.button-less');
const buttonMore = document.querySelectorAll('.button-more');
const projects = document.querySelectorAll('.project');

// для Скрыть/показать описание проекта:
const projectImageLink = document.querySelectorAll('.project-image-link');
const projectText = document.querySelectorAll('.project-text');
const bodyMask = document.querySelector('.body-mask');
const buttonBack = document.querySelectorAll('.button-back');

// Показать все проекты:
buttonMore.forEach(function (item) {
  item.addEventListener('click', (event) => {
    for (let i = 3; i < projects.length; i++) {
      projects[i].classList.remove('hidden');
    }

    item.parentElement.classList.add('hidden');
    buttonLess[0].parentElement.classList.remove('hidden');
  });   
});

// Свернуть все проекты:
buttonLess.forEach(function (item) {
  item.addEventListener('click', (event) => {
    for (let i = 3; i < projects.length; i++) {
      projects[i].classList.add('hidden');
    }

    item.parentElement.classList.add('hidden');
    buttonMore[0].parentElement.classList.remove('hidden');
  });   
});

// Открыть подробную информауию о проекте, по клику на картинку:
projectImageLink.forEach(function (item) {
  item.addEventListener('click', (event) => {
    item.parentElement.lastElementChild.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    bodyMask.classList.remove('hidden');
    event.preventDefault();
  });   
});

// Открыть подробную информауию о проекте, по клику на его описание:
projectText.forEach(function (item) {
  item.addEventListener('click', (event) => {
    item.parentElement.lastElementChild.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    bodyMask.classList.remove('hidden');
    event.preventDefault();
  });   
});

// Закрыть подробную информацию о проекте по клику на кнопку:
buttonBack.forEach(function (item) {
  item.addEventListener('click', (event) => {    
    item.parentElement.parentElement.classList.add('hidden');
    document.body.style.overflow = 'auto';
    bodyMask.classList.add('hidden');
    event.preventDefault();
  });   
});

