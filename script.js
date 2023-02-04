const menuBody = document.querySelector('.menu__list');

document.addEventListener('click', menu);

function menu(event) {
  if (event.target.closest('.menu__button')) {
    menuBody.hidden = !menuBody.hidden;
  }
  if (!event.target.closest('.menu')) {
    menuBody.hidden = true;
  }
}