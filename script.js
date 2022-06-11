const iconBurger = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__nav');
function removeBurger() {
  document.body.classList.remove('lock');
  iconBurger.classList.remove('active');
  menuBody.classList.remove('active');
}

if (iconBurger) {
  iconBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconBurger.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
if (iconBurger.classList.contains('active')) {
  removeBurger();
}

menuBody.addEventListener('click', function (e) {
  if (e.target === iconBurger || e.target.classList.contains('nav__link')) {
    removeBurger();
  }
});
