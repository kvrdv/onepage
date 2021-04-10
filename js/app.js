// для Скрыть/показать все проекты:
const buttonLess = document.querySelectorAll('.button-less');
const buttonMore = document.querySelectorAll('.button-more');
const projects = document.querySelectorAll('.project');

// для Скрыть/показать описание проекта:
const projectAboutOpenButton = document.querySelectorAll('.project-about-open-button');
const buttonBack = document.querySelectorAll('.button-back');
const projectAbout = document.querySelectorAll('.project-about');
const projectHeader = document.querySelectorAll('.project-header');

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
    projectAbout.forEach((element) => element.classList.add('hidden'));
    projectHeader.forEach((element) => element.classList.remove('hidden'));
    item.parentElement.parentElement.childNodes[3].classList.remove('hidden');
    item.parentElement.classList.add('hidden');
  });
});

// Закрыть подробную информацию о проекте по клику на кнопку:
buttonBack.forEach(function (item) {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    item.parentElement.parentElement.parentElement.childNodes[1].classList.remove('hidden');
    item.parentElement.parentElement.classList.add('hidden');
  });
});
