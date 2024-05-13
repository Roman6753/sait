//Меню//
const userIcon = document.querySelector('.user');
const menu = document.querySelector('.menu');

const Menu = () => {
  menu.classList.toggle('visible');
};

userIcon.addEventListener('click', Menu);