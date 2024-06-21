// bottom navigation
const navButtons = document.querySelectorAll('.nav-button');
const screens = document.querySelectorAll('.screen');

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => screens[index].scrollIntoView());
});