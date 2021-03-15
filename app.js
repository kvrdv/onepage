const buttonLess = document.querySelectorAll('.button-less');
const buttonMore = document.querySelectorAll('.button-more');
const projects = document.querySelectorAll('.project');

buttonMore.forEach(function (item) {
  item.addEventListener('click', (event) => {
    for (let i = 3; i < projects.length; i++) {
      projects[i].classList.remove('hidden');
    }

    item.parentElement.classList.add('hidden');
    buttonLess[0].parentElement.classList.remove('hidden');
  });   
});

buttonLess.forEach(function (item) {
  item.addEventListener('click', (event) => {
    for (let i = 3; i < projects.length; i++) {
      projects[i].classList.add('hidden');
    }

    item.parentElement.classList.add('hidden');
    buttonMore[0].parentElement.classList.remove('hidden');
  });   
});