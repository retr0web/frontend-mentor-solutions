const menu = document.querySelector('.menu');
const menuButton = document.querySelector('#menu-toggle');
const arrow = document.querySelector('#arrow');
const cards = document.querySelector('.cards');

function handleMenuButton(){
    menu.classList.toggle('hidden');
}

function handleScroll(){
    cards.scrollIntoView({behavior: "smooth"});
}

menuButton.addEventListener('click', handleMenuButton);
arrow.addEventListener('click', handleScroll);
