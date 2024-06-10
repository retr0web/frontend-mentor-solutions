const nav = document.querySelector('header nav');
const features = document.querySelector('#features');
const company = document.querySelector('#company');
const icons = document.querySelector('.icons');
const nonIcon = document.querySelector('.non-icon');
const openNav = document.querySelector('#mobile-nav');
const closeNav = document.querySelector('#close-nav');
const overlay = document.querySelector('.overlay');

function toggleVisibility(menu) {
    menu.classList.toggle('visible');
}

features.addEventListener('click', () => {
    toggleVisibility(icons);
});

company.addEventListener('click', () => {
    toggleVisibility(nonIcon);
});

openNav.addEventListener('click', () => {
    nav.classList.add('active');
    overlay.classList.add('active');
});

closeNav.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
});