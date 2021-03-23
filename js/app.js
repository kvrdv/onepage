// для Скрыть/показать все проекты:
const buttonLess = document.querySelectorAll('.button-less');
const buttonMore = document.querySelectorAll('.button-more');
const projects = document.querySelectorAll('.project');

// для Скрыть/показать описание проекта:
const projectAboutOpenButton = document.querySelectorAll('.project-about-open-button');
const bodyMask = document.querySelector('.body-mask');
const buttonBack = document.querySelectorAll('.button-back');
const html = document.querySelector("html");

// Показать все проекты:
buttonMore.forEach(function (item) {
  item.addEventListener('click', (event) => {
    event.preventDefault();
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
    event.preventDefault();
    for (let i = 3; i < projects.length; i++) {
      projects[i].classList.add('hidden');
    }

    item.parentElement.classList.add('hidden');
    buttonMore[0].parentElement.classList.remove('hidden');
  });   
});

// Открыть подробную информауию о проекте, по клику на картинку:
projectAboutOpenButton.forEach(function (item) {
  item.addEventListener('click', (event) => { 
    event.preventDefault();    
    item.parentElement.lastElementChild.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    document.body.style.zIndex =-1;
    bodyMask.classList.remove('hidden');   
  });   
});

// Закрыть подробную информацию о проекте по клику на кнопку:
buttonBack.forEach(function (item) {
  item.addEventListener('click', (event) => {
    event.preventDefault();    
    item.parentElement.parentElement.classList.add('hidden');
    document.body.style.overflow = 'auto';
    html.style.overflow = 'auto';
    document.body.style.zIndex =0;
    bodyMask.classList.add('hidden');
  });   
});

