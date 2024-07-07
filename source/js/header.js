const burgerMenu = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');
const html = document.querySelector('html');
const body = document.body;

function closeMenu(){
  burgerMenu.classList.remove("active");
  navList.classList.remove("active");
  body.classList.remove("lock");
  html.style.overflowY = 'visible';
}

function openMenu(){
  burgerMenu.classList.add('active');
  navList.classList.add('active');
  body.classList.add('lock');
  html.style.overflowY = 'hidden';
}

const effectMenu = () => {
  burgerMenu.addEventListener('click', function () {
    if (burgerMenu.classList.contains('active') &&  navList.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
};

navList.addEventListener('click', closeMenu)

export {effectMenu};


