const menuOpen = document.querySelector('#menu');
const menuClose = document.querySelector('#menu-close');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

function openMenu() {
    navigation.classList.add('menu-active');
    navigation.classList.add('transition-hack');
    overlay.classList.add('active');
}

function closeMenu() {
    navigation.classList.remove('menu-active');
    navigation.addEventListener("transitionend", () => {
        navigation.classList.remove('transition-hack');
    })
    overlay.classList.remove('active');
}

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);